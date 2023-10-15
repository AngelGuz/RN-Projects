import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    resultado: {
        color: 'white',
        fontSize: 50,
        textAlign: 'right',
        marginBottom: 10,
    },
    resultadoSmall:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 40,
        textAlign: 'right',
    },
    calculadoraContainer:{
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
    },
    button:{
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '300',
        color: 'white'
    }
});