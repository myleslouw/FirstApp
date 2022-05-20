import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

const CustomModal = () => {
    return (props.trigger) ? (
        <Modal visible={true}>
            <View style={ModalStyles.centered}>
                <View style={ModalStyles.Content}>
                    <Pressable onPress={ClickFunc}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                            colors={['#11998e', '#38ef7d']}
                            style={ModalStyles.DateButton}>
                            <Text style={ModalStyles.Text}>...</Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </View>
        </Modal>
    ) : null
}


const ModalStyles = StyleSheet.create({
    centered: {
        margin: 0,
        flex: 1,
        backgroundColor: 'rgba(52,52,52, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Content: {
        margin: 20,
        backgroundColor: 'red'
    },
    
    Text: {
        color: 'white'
    }
})