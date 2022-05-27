import React from 'react'
import { View, Pressable, StyleSheet, Text, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const DateButton = (props) => {

    
    return (
        <Pressable onPress={props.DateButtonClicked} style={{marginRight: 10}}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={DateButtonStyle.DateButton}>
                <Text style={DateButtonStyle.Text}>...</Text>
            </LinearGradient>
        </Pressable>
    )
}

const DateButtonStyle = StyleSheet.create({
    DateButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 40,
        elevation: 3,
    },

    Text: {
        color: 'white',
    }
})

export default DateButton