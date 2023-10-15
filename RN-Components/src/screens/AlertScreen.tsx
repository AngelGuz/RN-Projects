import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../Theme/appTheme';

export const AlertScreen = () => {



    const showAlert = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => console.log("Ok Pressed")
                }
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('onDismiss')
            }
        )
    }

    // Solo funciona en IOS
    const showPromp = () => {
        // Alert.prompt(
        //     '¿Está seguro?', 
        //     'Esta acción no se puede revertir',
        //     ( valor: string ) => console.log(`valor: ${valor}`),
        //     'plain-text',
        //     'hola mundo',
        //     //'email-address'
        // )

        prompt(
            'enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Ok', onPress: password => console.log('Ok Pressed, password' +  password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'Test',
                placeholder: 'placeholder'
            }
        )
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alert' />

            <Button 
                title='Mostrar Alerta'
                onPress={ showAlert }
            />

            <Button 
                title='Mostrar Alerta'
                onPress={ showPromp }
            />
        </View>
    )
}