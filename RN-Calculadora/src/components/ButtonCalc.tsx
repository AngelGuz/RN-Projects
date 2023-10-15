import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string;
    colorBtn?: string;
    ancho?: boolean;
    action: (numeroTexto: string) => void; 
}

export const ButtonCalc = ({text, colorBtn='#2D2D2D', ancho = false, action}: Props) => {
    // Desestructurar la informacion,
    // y no se necesitan usar corchetes internos
    // para poder colocar los botones
    return (
        <TouchableOpacity onPress={ () => action(text)}>
            <View style={{
                    ...styles.button, 
                    backgroundColor:colorBtn,
                    width: (ancho)? 180:80
                }}>
                <Text style={{
                    ...styles.buttonText,
                    color: (colorBtn === "#9B9B9B"?'black':'white') 
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
