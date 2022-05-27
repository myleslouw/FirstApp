import React from 'react'
import { View, Pressable, StyleSheet, Text, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const SetButton = (props) => {

    
    return (
        <Pressable onPress={props.SetButtonClicked} style={{marginLeft: 20}}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={SetButtonStyles.DateButton}>
                <Text style={SetButtonStyles.Text}>Set</Text>
            </LinearGradient>
        </Pressable>
    )
}

const SetButtonStyles = StyleSheet.create({
    DateButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 42,
        borderRadius: 40,
        elevation: 3,
    },

    Text: {
        color: 'white',
    }
})

export default SetButton