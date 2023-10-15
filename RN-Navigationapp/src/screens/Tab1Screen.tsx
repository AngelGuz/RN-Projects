import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
      console.log('Tab1Screen Effect');
    }, []);

    return (
        <View style={{...styles.globalMargin}}>
            <Text style={styles.title}>Tab1Screen</Text>
            <Text>
                <TouchableIcon iconName='airplane-outline' />
                <TouchableIcon iconName='mic-outline' />
                <TouchableIcon iconName='people-circle-outline' />
            </Text>
        </View>
    )
}