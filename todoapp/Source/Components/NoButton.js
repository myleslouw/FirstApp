import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const NoButton = (props) => {

  return (
    <Pressable onPress={props.NoButtonClicked} style={YesStyles.ButtonContainer}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={YesStyles.NoButton}>
                <Text style={YesStyles.Text}>No</Text>
            </LinearGradient>
        </Pressable>
  )
}

const YesStyles = StyleSheet.create({
    ButtonContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    NoButton: {
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

export default NoButton