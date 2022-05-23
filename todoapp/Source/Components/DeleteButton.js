import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const DeleteButton = (props) => {

  return (
    <Pressable onPress={props.DeleteFunction} style={DeleteStyle.ButtonContainer}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={[DeleteStyle.DeleteButton, {paddingVertical: props.paddingVert}]}>
                <Text style={DeleteStyle.Text}>X</Text>
            </LinearGradient>
        </Pressable>
  )
}

const DeleteStyle = StyleSheet.create({
    ButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    DeleteButton: {
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

export default DeleteButton