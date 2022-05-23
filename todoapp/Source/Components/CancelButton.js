import React from 'react'
import { View, Pressable, StyleSheet, Text, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const CancelButton = (props) => {

    
    return (
        <Pressable onPress={props.CancelButtonClicked} style={{marginRight: 20}}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={CancelButtonStyles.DateButton}>
                <Text style={CancelButtonStyles.Text}>Cancel</Text>
            </LinearGradient>
        </Pressable>
    )
}

const CancelButtonStyles = StyleSheet.create({
    DateButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 40,
        elevation: 3,
    },

    Text: {
        color: 'white',
    }
})

export default CancelButton