import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';

//interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ({navigation}: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={styles.globalMargin}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Icon name="menu-outline" size={35} color="#000" />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])
    

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 1 Screen</Text>
            <Button
                title='Ir página 2'
                onPress={ () => navigation.navigate('Pagina2Screen') }
            />

            <Text style={{
                marginVertical: 20,
                fontSize: 20,
            }}>
                Navegar con argumentos
            </Text>

            <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate('PersonaScreen', {
                        id: 1,
                        name: 'Pedro'
                    })}
                >
                    <Text><Icon name="person-outline" size={25} color="#900" /></Text>
                    <Text style={styles.buttonText}>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate('PersonaScreen', {
                        id: 2,
                        name: 'Maria'
                    })}
                >
                    <Text style={styles.buttonText}>Maria</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}