import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{};

export const Pagina3Screen = ({navigation}: Props) => {
    return (
        <View>
            <Text style={styles.title}>Pagina 3 Screen</Text>
            <Button 
                title='Regresar'
                onPress={()=> navigation.pop()}
            />

            <Button 
                title='Ir a la Página 1'
                onPress={()=>navigation.popToTop()}
            />
        </View>
    )
}