import React, { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';



export const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    } = useCalculadora()
    
    return (
        <View style={styles.calculadoraContainer}>

            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
                )
            }

            <Text 
                style={styles.resultado}
                adjustsFontSizeToFit
            >
                    {numero}
            </Text>

            <View style={styles.fila}>
                <ButtonCalc text="C" colorBtn="#9B9B9B" action={ limpiar } />
                <ButtonCalc text="+/-" colorBtn="#9B9B9B" action={positivoNegativo}/>
                <ButtonCalc text="Del" colorBtn="#9B9B9B" action={btnDelete}/>
                <ButtonCalc text="/" colorBtn="#FF9427" action={btnDividir}/>
            </View>

            <View style={styles.fila}>
                <ButtonCalc text="7" action={armarNumero}/>
                <ButtonCalc text="8" action={armarNumero}/>
                <ButtonCalc text="9" action={armarNumero}/>
                <ButtonCalc text="X" colorBtn="#FF9427" action={btnMultiplicar}/>
            </View>

            <View style={styles.fila}>
                <ButtonCalc text="4" action={armarNumero}/>
                <ButtonCalc text="5" action={armarNumero}/>
                <ButtonCalc text="6" action={armarNumero}/>
                <ButtonCalc text="-" colorBtn="#FF9427" action={btnRestar}/>
            </View>

            <View style={styles.fila}>
                <ButtonCalc text="1" action={armarNumero}/>
                <ButtonCalc text="2" action={armarNumero}/>
                <ButtonCalc text="3" action={armarNumero}/>
                <ButtonCalc text="+" colorBtn="#FF9427" action={btnSumar}/>
            </View>

            <View style={styles.fila}>
                <ButtonCalc text="0" ancho action={armarNumero}/>
                <ButtonCalc text="." action={armarNumero}/>
                <ButtonCalc text="=" colorBtn="#FF9427" action={calcular}/>
            </View>
            
        </View>
    )
}