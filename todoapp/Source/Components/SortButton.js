import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const DeleteButton = (props) => {

  return (
    <Pressable onPress={props.SortButtonClicked} style={SortButtonStyle.ButtonContainer}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={SortButtonStyle.SortButton}>
                <Text style={SortButtonStyle.Text}>Sort</Text>
            </LinearGradient>
        </Pressable>
  )
}

const SortButtonStyle = StyleSheet.create({
    ButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    SortButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
        elevation: 3,
    },

    Text: {
        color: 'white'
    }
})

export default DeleteButton