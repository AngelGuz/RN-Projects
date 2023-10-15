import React, { useContext, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

export const Animation101Screen = () => {

    const {opacity, position, fadeIn, fadeOut, startMovingPosition}  = useAnimation()

    const {theme: {colors}} = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                marginBottom: 20,
                opacity,
                transform: [{
                    translateY: position
                }],
                backgroundColor: colors.primary
            }}/>

            <Button title='Fade In' onPress={ () => {
                fadeIn();
                startMovingPosition(100, 700);
            }}  color={colors.primary}/>

            <Button title='Fade Out' onPress={fadeOut} color={colors.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox:{
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});