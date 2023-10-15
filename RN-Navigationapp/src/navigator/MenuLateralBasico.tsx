import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: (width >= 768 ? 'permanent':'front'),
        headerShown: false, // Quita el menu con el icono de hamburgesa
      }}
    >
      <Drawer.Screen 
        name="StackNavigator" 
        options={{title: 'Home'}} 
        component={StackNavigator}
      />

      <Drawer.Screen 
        name="SettingsScreen" 
        options={{title: 'Settings'}} 
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}