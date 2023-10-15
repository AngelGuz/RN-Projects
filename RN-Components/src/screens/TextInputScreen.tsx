import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../Theme/appTheme';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

export const TextInputScreen = () => {

    const {theme:{colors, dividerColor}} = useContext(ThemeContext);

    const { isSubscribed, form, onChange} = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false,
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS ==="ios"? "padding":"height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title='Text Input' />

                        <TextInput 
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}
                            placeholderTextColor={dividerColor}
                        />
                        <TextInput 
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"
                            placeholderTextColor={dividerColor}
                        />

                        <Text>Suscribirme</Text>
                        <View style={stylesScreen.switchRow}>
                            <Text style={{
                                ...stylesScreen.switchText,
                                color: colors.text
                                }}>isHappy</Text>
                            <CustomSwitch isOn={isSubscribed} onChange={(value)=> onChange(value, 'isSubscribed')} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <TextInput 
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder="Ingrese su teléfono"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType="phone-pad"
                            placeholderTextColor={dividerColor}
                        />

                        
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    switchText: {
        fontSize: 25
    },
    inputStyle: {
        borderWidth: 2,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    }
});