import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, Image } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { useCategories } from '../hooks/useCategories';
import { ProductsContext } from '../context/ProductsContext';
import { useForm } from '../hooks/useForm';
import { ProductsStackParams } from '../navigator/ProductsNavigator';


interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'>{};

export const ProductScreen = ({route, navigation}: Props) => {
    const {id = '', name = ''} = route.params;

    const [tempUri, setTempUri] = useState<string>();

    const {categories} = useCategories();
    const {loadProductById, addProducts, updateProducts, uploadImage} = useContext(ProductsContext);

    const { _id, categoriaId, nombre, img, form, onChange, setFormValue } = useForm({
        _id: id,
        categoriaId: '',
        nombre: name,
        img: ''
    });

    useEffect(() => {
      navigation.setOptions({
        title: (nombre)?nombre: 'Sin nombre del producto'
      })
    }, [nombre])

    useEffect(() => {
      loadProduct();
    }, [])
    

    const loadProduct = async() => {
        if(id.length === 0) return;
        const product = await loadProductById(id);
        setFormValue({
            _id: id,
            categoriaId: product.categoria._id,
            img: product.img || '',
            nombre
        });
    }

    const saveOrUpdate = async() => {
        if(id.length > 0 ){
            updateProducts(categoriaId, nombre, id);
        }else{
            const tempoCategoriaId = categoriaId || categories[0]._id;
            const newProduct = await addProducts(tempoCategoriaId, nombre);
            onChange(newProduct._id, '_id');
        }
    }

    const takePhoto = () => {
        launchCamera({
            mediaType: 'photo',
            quality: 0.5
        }, (resp) => {
            if(resp.didCancel) return;
            if(!resp.assets?.[0].uri) return;

            setTempUri(resp.assets[0].uri)
            uploadImage(resp, _id);
        })
    }

    const takePhotoFromGallery = () => {
        launchImageLibrary({
            mediaType: 'photo',
            quality: 0.5
        }, (resp) => {
            if(resp.didCancel) return;
            if(!resp.assets?.[0].uri) return;

            setTempUri(resp.assets[0].uri)
            uploadImage(resp, _id);
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <TextInput
                    placeholder='Producto'
                    style={styles.textInput}
                    value={nombre}
                    onChangeText={ (value) => onChange(value, 'nombre') }
                />
                {/* Picker / Selector */}
                <Text style={styles.label}>Categoria:</Text>
                <Picker
                    selectedValue={categoriaId}
                    onValueChange={(itemValue) => onChange(itemValue, 'categoriaId')}
                >
                    {
                        categories.map( c => (
                            <Picker.Item label={c.nombre} value={c._id} key={c._id} />
                        ))
                    }
                </Picker>

                {
                    (_id.length>0) && (
                        <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 10}}>
                            <Button
                                title='Cámara'
                                onPress={ takePhoto }
                                color="#5856D6"
                            />
                            <Button
                                title='Galerìa'
                                onPress={ takePhotoFromGallery }
                                color="#5856D6"
                            />
                        </View>
                    )
                }


                <View>
                    <Button
                        title='Guardar'
                        onPress={ saveOrUpdate }
                        color="#5856D6"
                    />
                </View>

                {
                    (img.length>0 && !tempUri) && (
                        <Image
                            source={{ uri:img }}
                            style={{
                                marginTop: 20,
                                width: '100%',
                                height: 300
                            }}
                        />
                    )
                }

                {/* Mostrar Imagen Temporal */}
                {
                    (tempUri) && (
                        <Image
                            source={{ uri:tempUri }}
                            style={{
                                marginTop: 20,
                                width: '100%',
                                height: 300
                            }}
                        />
                    )
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20
    },
    label: {
        fontSize: 18,
    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,0.2)',
        height: 35,
        marginTop: 5,
        marginBottom: 15,
    }
});