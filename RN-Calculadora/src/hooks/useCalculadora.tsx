import React, { useRef, useState } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir    
}

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');
    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string) => {
        // No aceptar doble punto

        if(numero.includes('.') && numeroTexto === '.') return;

        if(numero.startsWith('0') || numero.startsWith('-0')){
            if(numeroTexto === '.'){
                setNumero(numero+ numeroTexto);
                
                // Evaluar si es otro cero, y hay punto
            }else if(numeroTexto === '0' && numero.includes('.')){
                setNumero(numero + numeroTexto);
                // Evaluar si es diferente de cero y no tiene punto
            }else if(numeroTexto !== '0' && !numero.includes('.')){
                setNumero(numeroTexto);
                // Evitar más de un cero antes del punto
            }else if(numeroTexto==='0' && !numero.includes('.')){
                setNumero(numero)
            }else{
                setNumero(numero + numeroTexto);
            }

        }else{
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () => {
        if(numero.includes('-')){
            setNumero(numero.replace('-', ''));
        }else{
            setNumero('-' + numero);
        }
    }

    const btnDelete = () => {
        let negative = '';
        let numeroTemp = numero;
        if(numero.includes('-')){
            negative = '-';
            numeroTemp = numero.substring(1);
        }

        if(numeroTemp.length > 1){
            setNumero(negative + numeroTemp.slice(0,-1));
        }else{
            setNumero('0');
        }
    }

    const cambiarNumPoranterior = () => {
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0,-1));
        }else{
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumPoranterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar = () => {
        cambiarNumPoranterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    const btnRestar = () => {
        cambiarNumPoranterior();
        ultimaOperacion.current = Operadores.restar;
    }
    const btnSumar = () => {
        cambiarNumPoranterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1+num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2-num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1*num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num2/num1}`);
                break;
        }

        setNumeroAnterior('0');
    }

    return {
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
    }
}