import { Text, View, StyleSheet, TextInput, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import YesButton from './YesButton';
import NoButton from './NoButton';


const AreYouSure = (props) => {

    const closeModal = () => {
        props.ShowWarning(false)
    }

    return (
        <Pressable onPress={closeModal} style={AYSStyles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={AYSStyles.Outline}>
                <View style={AYSStyles.Background}>
                    <Text style={AYSStyles.Texts}>Are you sure you would like to delete the task? This cannot be undone</Text>
                    <View style={AYSStyles.ButtonContainer}>
                        <NoButton NoButtonClicked={closeModal}/>
                        <YesButton YesButtonClick={props.YesButtonClicked}/>
                    </View>
                </View>
            </LinearGradient>
        </Pressable>
    );
}

const AYSStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.5)',
    },

    Outline: {
        height: '30%',
        width: '80%',
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center'
    },

    Background: {
        width: '98%',
        height: '98%',
        backgroundColor: "black",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: 'center',
    },

    ButtonContainer: {
        width: '100%',
        marginVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    Texts: {
        color: 'white',
        fontSize: 18,
        marginVertical: 20,
        marginHorizontal: 10,
        maxWidth: 250,
        textAlign: 'center'
    }
})

export default AreYouSure