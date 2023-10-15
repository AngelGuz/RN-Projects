# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Notas del Refuerzo | Typescript
## Declaraciones forzadas

Las declaraciones forazadas se usan con `:` seguda del tipo de dato ejemplo `string` o `number`.

**Nota:** Se pueden agregar mas tipos de dato si se coloca un `|`y seguido de esto se coloca el/los otro tipo de datos.

## Objetos literal e Interfaces

### Objetos literales
Los objetos literales son aquellos que se crean como una definicion del dato. Ejemplo

``` const estaActivo:boolean = true; ```

Esto nos indica que el tipo de objeto sera bololean.

### Interfaces

Las interfaces son las definiciones que le vamos a dar al tipo de objetos. Ejemplo

```
interface Persona{
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}
```

**`Nota:`** Si un objeto necesita otro objeto este se declara seguido del Objeto

```
interface Direccion {
    pais: string;
    casaNo: number;
}
```

Las interfaces no sirven para crear instancias.

## Funciones

Si pasamos el cursos sobre la funcion sabemos que es una funcion porque tiene los caracteres `()` y con los caracteres `=>` nos indica el valor de retorno.

**Nota:** Toda funcion de js, si no se declara nada adentro retorno `undefined`.

## Hooks

### useState
El `useState` es un componente de **React** en el cual le puedes mandar el valor que se necesita, si se envia un dato en el `useState` el valor y el set tomaran el tipo de dato.

### Hooks
Los `Hooks` se utilizan para contener las variable y las funciones que se esperan recibir en los componentes.

**Nota:** El archivo de los `hooks`debe tener el prefijo `use` esto es un estandar creado por react para los `hooks`.

### useReducer
El `useReducer` se utiliza cuando se tienen componentes muy complejos.

El `Reducer` es una funcion para retornar un nuevo estado. El reducer es una funcion que tiene el nombre en alguna parte del codigo. **Se recomienda poner `Reducer` para saber que es esa función**

## Peticiones HTTP - Axios

Las peticiones con **`Axios`** nos permiten tener un mayor control y mayores funciones que con el `fetch`que tiene incorporado javascript.

Con typescript una vez que tenemos definido el tipo de objeto en el response ya sabe que tipo de objeto es y cuales son sus propiedades.

Para mostrar la data en un listado se puede hacer con un `renderItem` que recibe la el **Usuario** que se declaro con el maquetado en las interfaces. Con esto podemos desestructurar la informacion con llaves y colocar los nombres solamente. Ejemplo

### Ejemplo con el nombre de la variable
```
const renderItem = (usuario: Usuario) => {/*Codigo para mostrar los datos*/}
```
### Ejemplo desestructurado
```
const renderItem = ({id, first_name}: Usuario) => {/*Codigo para mostrar los datos*/}
```

**Dato:** Cuando se coloca entre mayor que y menor que, a un lado de la peticion con el tipo de `interface` el consumo en bytes es de 0.

**Nota:* Se tiene la extension `Paste JSON as Code` con esa se copia el JSON desde postman y se nombre la primera `interface` 

### Agregar tipos de retorno
En typescript se les puede especificar el tipo de `return` que se espera de una funcion, si se coloca `:` y despues el tipo de dato. Ejemplo

```
const sumar = ():number => {}
```

## Custom Hook

## Shortcuts 

1. Si colocas `rfc` con el autocompletado se genera el codigo base para *React*

```
export const NombreFuncion = () => {
    return <></>
}
```
