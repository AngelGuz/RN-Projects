import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{ createContext, useEffect, useReducer } from "react";
import cafeApi from "../api/cafeApi";
import { Usuario, LoginResponse, LoginData, registerData } from '../interface/appInterface';
import { authReducer, AuthState } from "./authReducer";

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: (registerData: registerData) => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInitialState: AuthState = {
    status: 'checking',
    user: null,
    token: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    useEffect(() => {
        ckeckToken();
    }, [])
    
    const ckeckToken = async() => {
        const token = await AsyncStorage.getItem('token');

        // No token
        if(!token){
            return dispatch({type: 'notAuthenticated'});
        }

        // Hay token
        const resp = await cafeApi.get('/auth');
        if(resp.status !== 200){
            return dispatch({type: 'notAuthenticated'});
        }

        await AsyncStorage.setItem('token', resp.data.token);
        dispatch({
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        });
    }

    const signIn = async({correo, password}: LoginData) => {
        try {
            const resp = await cafeApi.post<LoginResponse>('/auth/login', {correo, password});
            dispatch({
                type: 'signUp',
                payload: {
                    token: resp.data.token,
                    user: resp.data.usuario
                }
            });

            await AsyncStorage.setItem('token', resp.data.token);

        } catch (error) {
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || "Información incorrecta"
            })
        }
    }

    const signUp = async({correo, nombre, password}: registerData) => {
        try {
            const resp = await cafeApi.post<LoginResponse>("/usuarios", {correo, nombre, password});

            dispatch({
                type: 'signUp',
                payload: {
                    user: resp.data.usuario,
                    token: resp.data.token
                }
            });
            await AsyncStorage.setItem('token', resp.data.token);

        } catch (error) {
            dispatch({
                type: 'addError',
                payload: error.response.data.errors[0].msg || "Revise la información"
            });
        }
    }

    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'logout'});
    }

    const removeError = () => {
        dispatch({type: 'removeError'});
    }


    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError
        }}>
            {children}
        </AuthContext.Provider>
    )
}