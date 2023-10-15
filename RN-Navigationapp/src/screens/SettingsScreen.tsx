import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colores } from '../theme/appTheme';

// Se importa de este lugar.
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

    // Hook para tener el safe area 
    // pero con un hook para tener
    // mas control
    const insets = useSafeAreaInsets();

    const {authState} = useContext( AuthContext );

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={styles.title}>Settings Screen</Text>

            <Text>{ JSON.stringify(authState, null, 4) }</Text>

            {
                authState.favoriteIcon && (
                    <Icon 
                        name={ authState.favoriteIcon! }
                        size={150}
                        color={colores.primary}
                    />
                )
            }
        </View>
    )
}