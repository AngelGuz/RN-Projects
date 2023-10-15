import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNavigation, useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '../context/ThemeContext/ThemeContext';
import { MenuItem } from '../interfaces/appInterface';

interface Props{
    menuItem: MenuItem
}

export const FlatListMenuItem = ({menuItem}: Props) => {

    const navigation = useNavigation();
    const { theme:{colors} } = useContext(ThemeContext);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={ () => navigation.navigate(menuItem.component as any) }
        >

            <View style={styles.container} >
                <Icon name={menuItem.icon} color={colors.primary} size={25} />
                <Text style={{
                    ...styles.itemText,
                    color: colors.text
                }}>
                    {menuItem.name}
                </Text>

                <View style={{flex: 1}} />

                <Icon name="chevron-forward-outline" color={colors.primary} size={25} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 5,
        justifyContent: 'center'
    }
});