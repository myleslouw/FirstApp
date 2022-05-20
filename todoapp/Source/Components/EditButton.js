import React from 'react'
import {  Pressable, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const EditButton = (props) => {
    function ClickFunc() {
        console.debug("Complete button Clicked")
    }

    return (
        <Pressable onPress={ClickFunc} style={EditStyles.ButtonContainer} >
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={EditStyles.EditButton}>
                <Text style={EditStyles.Text}>✎</Text>
            </LinearGradient>
        </Pressable>
    )
}

const EditStyles = StyleSheet.create({
    ButtonContainer: {
        maxWidth: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    EditButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 15,
        elevation: 3,
    },

    Text: {
        color: 'white'
    }
})

export default EditButton