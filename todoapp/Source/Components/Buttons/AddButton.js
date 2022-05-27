import React from 'react'
import {  Pressable, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AddButton = (props) => {

    return (
        <Pressable onPress={props.AddClick} style={{marginTop: 5, marginBottom: props.bottomMargin}}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={ButtonStyle.AddButton}>
                <Text style={ButtonStyle.Text}>Add</Text>
            </LinearGradient>
        </Pressable>
    )
}

const ButtonStyle = StyleSheet.create({
    AddButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 40,
    },

    Text: {
        color: 'white'
    }
})

export default AddButton