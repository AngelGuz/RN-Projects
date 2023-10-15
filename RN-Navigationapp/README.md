# Navegación

## Stack Navigation

El stack se maneja como si fueran cartas, todas las cartas se van a ir apilando, ademas de esto se pueden actualizar todas las cartas que se tienen atras.

# React Native Reanimated - Error

Este error nos da al instalar unos paquetes para usar el menu lateralse recomienda hacer las siguientes instalaciones.

```
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack
npm install react-native-gesture-handler react-native-reanimated
npm install @react-native-masked-view/masked-view
npm install @react-navigation/drawer
```

## Configurar el reanimated

Agregar **reanimated** a babel plugin en **`babel.config.js`**

```
plugins: [
    'react-native-reanimated/plugin',
],
```

Activar **Hermes** engine en **`android/app/build.gradle`**

```
project.ext.react = [
    enableHermes: true,
]
```

Editar el **`MainApplication.java`** que se encuentra en **`android/app/src/main/java/<your package name>/MainApplication.java`**

Agregar los siguientes modulos:

```
import com.facebook.react.bridge.JSIModulePackage;
import com.swmansion.reanimated.ReanimatedJSIModulePackage;
```

En un apartado un poco mas abajo, despues de la funcion de **`getJSMainModuleName()`** agregar la siguiente funcion.

```
@Override
protected JSIModulePackage getJSIModulePackage(){
    return new ReanimatedJSIModulePackage();
}
```

## Limpiar cache de **React**

```
npx react-native start --reset-cache
```

volvemos a ejecutar los comando para ios y android

```
npx react-native run-android
npx react-native run-ios
```

# Agregar Iconos en Android

En el archivo que se encuentra en `android/app/build.gradle` editar el inicio y agregar.

```
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

Despues de agregar el nombre del paquete de iconos a importar se agrega la siguiente linea para que typescript lo pueda reconocer

```
npm i --save-dev @types/react-native-vector-icons
```

# Agregar Iconos en IOS

Primero se abre Xcode, y se abre el proyecto que esta en la carpeta de **ios** el **xcworkspace** se agrega un **Nuevo Grupo** luego de esto en la carpeta de **node_modules** se busca la carpeta y los Fonts.

Se agrega la o las fonst que se van a usar a la carpeta que se creo en xcode, despues de esto en el archivo de info que esta en xcode se agregan las fonts, se recomienda abrir en forma de codigo. 

[Link de la configuración.](https://github.com/oblador/react-native-vector-icons "vector icons.")

Al finalizar esta configuración hace un `npx pod-install`

# Contextos Globales

El contexto lo tenemos que ver como un componente mas que se va a usar en el **App.tsx**