import React from 'react'
import {  Pressable, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CompleteButton = () => {
    function ClickFunc() {
        console.debug("Complete button Clicked")
    }

    return (
        <Pressable onPress={ClickFunc}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={CompleteStyles.completeButton}>
                <Text style={CompleteStyles.Text}>✓</Text>
            </LinearGradient>
        </Pressable>
    )
}

const CompleteStyles = StyleSheet.create({
    completeButton: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 45,
        borderRadius: 15,
        elevation: 3,
    },

    Text: {
        color: 'white'
    }
})

export default CompleteButton