import React from 'react';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: (width >= 768 ? 'permanent':'front'),
        headerShown: false, // Quita el menu con el icono de hamburgesa
      }}
      drawerContent={ (props) => <MenuInterno {...props} /> }
    >
      <Drawer.Screen 
        name="Tabs"
        component={Tabs}
      />

      <Drawer.Screen 
        name="SettingsScreen" 
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones del menú */}
      <View style={styles.menuContainer}>
          <TouchableOpacity 
            style={{...styles.btnMenu, flexDirection:'row'}}
            onPress={ () => navigation.navigate('Tabs') }
          >
            <Icon name="list-outline" size={25} color="#900" />
            <Text style={styles.textMenu}> Navegación</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{...styles.btnMenu, flexDirection: 'row'}}
            onPress={ () => navigation.navigate('SettingsScreen') }
          >
            <Icon name="settings" size={25} color="#900" />
            <Text style={styles.textMenu}> Settings</Text>
          </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
}