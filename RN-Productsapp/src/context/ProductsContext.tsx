import { createContext, useEffect, useState } from "react";
import { Producto, ProductsResponse } from '../interface/productsInterface';
import cafeApi from '../api/cafeApi';
import { ImagePickerResponse } from "react-native-image-picker";

type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProducts: (categoryId: string, productName: string) => Promise<Producto>;
    updateProducts: (categoryId: string, productName: string, productId: string) => Promise<void>;
    deleteProducts: (productId: string) => Promise<void>;
    loadProductById: (productId: string) => Promise<Producto>;
    uploadImage: (data: ImagePickerResponse, productId: string) => Promise<void>; // Cambiar Any
}

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({children}: any) => {

    const [products, setProducts] = useState<Producto[]>([]);

    useEffect(() => {
      loadProducts();
    }, [])
    

    const loadProducts = async() => {
        const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50');
        //setProducts([...products, ...resp.data.productos]);
        setProducts([...resp.data.productos]);
    }

    const addProducts = async(categoryId: string, productName: string): Promise<Producto> => {
        const resp = await cafeApi.post<Producto>('/productos', {
            nombre: productName,
            categoria: categoryId
        });
        setProducts([...products, resp.data]);

        return resp.data;
    }

    const updateProducts = async(categoryId: string, productName: string, productId: string) => {
        const resp = await cafeApi.put<Producto>(`/productos/${productId}`, {
            nombre: productName,
            categoria: categoryId
        });
        setProducts(products.map( prod => {
            return (prod._id === productId)
                ? resp.data
                : prod
        }));
    }

    const deleteProducts = async(productId: string) => {

    }

    const loadProductById = async(productId: string): Promise<Producto> => {
        const resp = await cafeApi.get<Producto>(`/productos/${productId}`);
        return resp.data;
    }
    
    const uploadImage = async(data: ImagePickerResponse, productId: string) => {
        const fileToUpload = {
            uri: data.assets?.[0].uri,
            type: data.assets?.[0].type,
            name: data.assets?.[0].fileName
        }
        
        const formData = new FormData();
        formData.append('archivo', fileToUpload);

        try {
            const resp = await cafeApi.put(`/uploads/productos/${productId}`, formData, {
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                transformRequest: () => {
                    return formData;
                }
            });
            
        } catch (error) {
            console.log({error});
        }
    }

    return (
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProducts,
            updateProducts,
            deleteProducts,
            loadProductById,
            uploadImage,
       
        }}>
            {children}
        </ProductsContext.Provider>
    )
}