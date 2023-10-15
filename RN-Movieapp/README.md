# Aplicación de Peliculas

## Instalación principal

Instalar el **React Navigation**, seguir la documentación para su instalación [Link de la configuración.](https://reactnavigation.org/docs/getting-started "React Navigation.")

## Instalar Stack Navigator

Despues de instalar las dependencias de navegación, instalar las dependencias para el navigator, seguir la documentacion para su instalación [Link de la configuración.](https://reactnavigation.org/docs/stack-navigator/ "Stack Navigator.")

**Nota Importante:** Recordar que en el `App.js` o `index.js` se debe agregar el siguiente `import` al inicio del codigo.

```
import 'react-native-gesture-handler';
```

Con esto ya se puede generara las vistas según el stack

## Errores con el Carrousel

**`Importante`**: Despues de instalar los paquetes volver a compilar la app junto con los `pod`.

Se esta usando una libreria para el carrousel [Link de la configuración.](https://github.com/meliorence/react-native-snap-carousel "Stack Navigator.")

La libreria cuenta con unos fallos, al momento de instalación se tiene que validar que la instalación tenga la ultima versión en el **package.json** del `react-native-snap-carousel` actualmente esta en la versión `^3.9.1` para agregarlo seguir los siguientes codigos.

Este punto es para instalar el carousel.
```
npm install --save react-native-snap-carousel
```

Esta dependencia es para desarrollo, mas que nada para tener en uso `typescript`.
```
npm i --save-dev @types/react-native-snap-carousel
```

Despues de agregar estas dos instalaciones, validar la version del carousel, si no se encuentra en la ultima version, volver a instalar el carousel.

Nota: El segundo codigo valida un warning que aparece.

## Iconos

Al instalar iconos lo mas sencillo es comenzar con Android, solo requerimos hacer la instalación con el siguiente comando.

```
npm install --save react-native-vector-icons
```

<details><summary>Lista de todos los iconos disponibles, copiar en Info.plist</summary>
  
  ```xml
  <key>UIAppFonts</key>
  <array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>Zocial.ttf</string>
    <string>Fontisto.ttf</string>
  </array>
  ```
  
</details>

### Android

Despues de eso en el `android/app/build.gradle` colocar el siguiente codigo despues del primer **import** y solo colocar el nombre de los iconos que se desean usar, para mi caso solo es **Ionicons.ttf**.

```
project.ext.vectoricons = [
    iconFontNames: [ 'Ionicons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

Despues de este punto se recomienda hacer el **import** del tipado para que lo reconozca `typescript`. Ejecutar el siguiente comando.

```
npm i --save-dev @types/react-native-vector-icons
```

Justamente despues de esto se recomienda bajar la aplicación de **Android** y volverla a iniciar para que importe correctamente los datos.

### IOS

Para el apartado de **IOS** se necesita abrir el `xcworkspace`que se encuentra en la carpeta de **ios** con el xcode, se necesita crear la carpeta **`Fonts`** y copiar las font que se necesiten, la ubicacion es `node_modules`en la carpeta de de **fonts** dentro de `react-native-vector-icons`.

Esto se copiar en la carpeta **`Fonts`** que se creo para el `xcworkspace` y se necesita abrir el `info.plist` como source code y copiar el codigo xml que se encuentra arriba, solo con la font necesaria.

Reiniciar el proyecto y reinstalar los pod.

```
npx pod-install
```

y 

```
npx react-native run-ios
```

## 