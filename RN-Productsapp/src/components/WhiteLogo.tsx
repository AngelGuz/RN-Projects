import React from 'react';
import { View, Text, Image } from 'react-native';

export const WhiteLogo = () => {
    return (
        <View style={{
            alignItems: 'center',
        }}>
            <Image
                source={require('../assets/react-native-white.png')}
                style={{
                    width: 110,
                    height: 100,
                }}
            />
        </View>
    )
}