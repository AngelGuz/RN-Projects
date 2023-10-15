import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

export const ItemSeparator = () => {

    const {theme: {dividerColor}} = useContext(ThemeContext);

    return (
        <View style={{
            borderBottomWidth:1,
            opacity: 0.4,
            marginVertical: 5,
            borderBottomColor: dividerColor
        }}/>
    )
}