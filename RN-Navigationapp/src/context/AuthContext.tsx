import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Feinir cómo luce, qué informacion tendré aquí.
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Se usara para decirle a React cómo luce y qué expone el contexto
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
    logout: () => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {


    // El reducer no es mas que una función
    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type:'signIn'})
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    const logout = () => {
        dispatch({type:'logout'})
    }

    const changeUsername = (username: string) => {
        dispatch({type: 'changeUserName', payload: username})
    }

    return (
        <AuthContext.Provider value={{
            // authState: authState,
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            changeUsername
        }}>
            { children }
        </AuthContext.Provider>
    )
}