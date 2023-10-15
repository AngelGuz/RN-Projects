import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export const Tab3Screen = () => {

    useEffect(() => {
        console.log('Tab3Screen Effect');
      }, []);

    return (
        <View>
            <Text>Hello World</Text>
        </View>
    )
}