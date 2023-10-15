import React, { Children } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
    return (
      <NavigationContainer>
        <AppState>
          {/* <StackNavigator /> */}
          {/* <MenuLateralBasico /> */}
          <MenuLateral />
        </AppState>
      </NavigationContainer>
    )
}

//const AppState = ({children}: JSX.Element) => { /* para un solo elemento */
//const AppState = ({children}: JSX.Element[]) => { /* para varios elementos */
const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;