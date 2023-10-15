
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
    const {top} = useSafeAreaInsets();
    return (
        <BottomTabAndroid.Navigator
            style={{
                paddingTop: top,
            }}
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary,
            }}
            screenOptions={({route})=>({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({color, focused}) => {
                    let iconName: string = "";
                    switch(route.name){
                        case 'Tab1Screen':
                            iconName = "home"
                            break;
                        case 'Tab2Screen':
                            iconName = "clipboard"
                            break;
                        case 'StackNavigator':
                            iconName = "chatbox"
                            break;
                    }
                    return (<Icon name={iconName} size={20} color="#000" />)
                },
                
            })}
            
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTabNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
    const { top } = useSafeAreaInsets(); // Agregar un safe area dinamico.
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
                paddingTop: top, // Agregar el safe area por el notch
            }}
            screenOptions={ ({route}) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {

                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({color, focused, size}) => {
                    let iconName: string = "";
                    switch(route.name){
                        case 'Tab1Screen':
                            iconName = "home"
                            break;
                        case 'Tab2Screen':
                            iconName = "clipboard"
                            break;
                        case 'StackNavigator':
                            iconName = "chatbox"
                            break;
                    }
                    return (<Icon name={iconName} size={20} color="#000" />)
                },
                headerShown: false, // Quitar un header que se agrega por defecto.
            }) }
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title:'Tab1', tabBarIcon:(props)=><Text style={{color: colores.primary}}>Text</Text>}} component={Tab1Screen} /> */}
            <BottomTabIOS.Screen name="Tab1Screen" component={Tab1Screen} />
            <BottomTabIOS.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTabNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
}