import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ({route, navigation}:Props) => {
    
    const params = route.params;

    const {changeUsername} = useContext(AuthContext);

    useEffect(() => {
      navigation.setOptions({
          title: params.name
      })
    }, [])
    
    useEffect(() => {
      changeUsername(params.name)
    }, [])
    

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }    
            </Text>
        </View>
    )
}