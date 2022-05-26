import { Text, View, StyleSheet, TextInput, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import SetButton from './SetButton';
import CancelButton from './CancelButton';


const EditTask = (props) => {

    const closeModal = () => {
        props.ShowEditTask(false)
    }

    return (
        <Pressable onPress={closeModal} style={EditTaskStyles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={EditTaskStyles.Outline}>
                <View style={EditTaskStyles.Background}>
                    <Text style={EditTaskStyles.Texts}>Edit task Coming soon</Text>
                    <View style={EditTaskStyles.ButtonContainer}>
                        <CancelButton NoButtonClicked={closeModal}/>
                        <SetButton SetButtonClicked={props.SetButtonClicked}/>
                    </View>
                </View>
            </LinearGradient>
        </Pressable>
    );
}

const EditTaskStyles = StyleSheet.create({
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

export default EditTask