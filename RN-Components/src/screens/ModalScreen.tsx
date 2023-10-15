import React from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <View>
            <HeaderTitle title='Modal Section'/>

            <Button 
                title='Abrir modal'
                onPress={ () => setIsVisible(true) }
            />

            <Modal
                animationType='fade'
                visible={isVisible}
                transparent
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalBody}>
                        <HeaderTitle title='Modal' />
                        <Text>Cuerpo del Modal</Text>
                        <Button title='Cerrar' onPress={ ()=>setIsVisible(false) } />

                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    modalBody: {
        backgroundColor:'white',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        elevation: 10,
        borderRadius: 5
    }
});