import React, { useEffect, useReducer } from 'react';
import { createContext } from "react";
import { Appearance, AppState, useColorScheme } from 'react-native';
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:any) => {

    const colorScheme = useColorScheme();

    const [theme, dispatch] = useReducer(themeReducer, (colorScheme==='dark'?darkTheme:lightTheme)) // TODO: Leer el tema global

    useEffect(() => {
      AppState.addEventListener('change', (status) => {
        console.log({status});
        if(status==='active'){
            (Appearance.getColorScheme() === 'light')
                ? setLightTheme()
                : setDarkTheme();
        }
      })
    }, [])
    

    // useEffect(() => {
    //     (colorScheme==='light')
    //         ? setLightTheme()
    //         : setDarkTheme();
    // }, [colorScheme]);
    

    const setDarkTheme = () => {
        dispatch({type: 'set_dark_theme'})
        console.log('setDarkTheme');
    }
    
    const setLightTheme = () => {
        dispatch({type: 'set_light_theme'});
        console.log('setLightTheme');
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}