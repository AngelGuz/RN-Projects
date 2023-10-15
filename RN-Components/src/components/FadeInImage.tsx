import React, { useContext } from 'react';
import { View, Text, Animated, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState } from 'react';
import { styles } from '../Theme/appTheme';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {

    const {opacity, fadeIn} = useAnimation();
    const [isLoading, setIsLoading] = useState(false);

    const {theme: {colors}} = useContext(ThemeContext);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            {
                isLoading && <ActivityIndicator 
                                style={{position: 'absolute'}}
                                color={colors.primary}
                                size={30} 
                            />
            }

            <Animated.Image 
                source={{uri}}
                onLoadEnd={ finishLoading }
                style={{
                    ...style as any,
                    opacity
                }}
            />
        </View>
    )
}