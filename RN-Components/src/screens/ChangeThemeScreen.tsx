import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';
import { styles } from '../Theme/appTheme';

export const ChangeThemeScreen = () => {

    const {setDarkTheme, setLightTheme, theme:{colors}} = useContext(ThemeContext);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Theme' />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity style={{
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                    width: 150,
                    height: 50,
                    borderRadius: 20
                }}
                    activeOpacity={0.8}
                    onPress={setLightTheme}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22
                    }}>Light</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                    width: 150,
                    height: 50,
                    borderRadius: 20
                }}
                    activeOpacity={0.8}
                    onPress={setDarkTheme}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22
                    }}>Dark</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}