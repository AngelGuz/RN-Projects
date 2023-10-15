import React, { useContext, useState } from 'react';
import { View, Text, Platform, Switch } from 'react-native';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

interface Props{
    isOn: boolean;
    onChange: (isEnabled: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {

    const {theme: {colors}} = useContext(ThemeContext);

    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    }

    return (
        <Switch
                trackColor={{ false: '#D9D9DB', true: colors.primary }}
                thumbColor={ (Platform.OS === 'android')?'#5856D6':'' }
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
        />
    )
}