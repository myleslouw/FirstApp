import { Text, View, StyleSheet, TextInput, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import YesButton from './Buttons/YesButton';
import NoButton from './Buttons/NoButton';
import FadeInView from './Animations/FadeInView';


const AreYouSure = (props) => {

    const [animationState, SetAnimationState] = useState(true)

    const closeModal = () => {
        props.ShowWarning(false)
    }

    return (
        <Pressable onPress={() => SetAnimationState(false)} style={AYSStyles.container}>
            <FadeInView 
                style={AYSStyles.AnimationWindow}
                Opened={animationState}
                AfterAnimation={closeModal}>

                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                    colors={['#11998e', '#38ef7d']}
                    style={AYSStyles.Outline}>
                    <View style={AYSStyles.Background}>
                        <Text style={AYSStyles.Texts}>Are you sure you would like to delete the task? This cannot be undone</Text>
                        <View style={AYSStyles.ButtonContainer}>
                            <NoButton NoButtonClicked={closeModal} />
                            <YesButton YesButtonClick={props.YesButtonClicked} />
                        </View>
                    </View>
                </LinearGradient>
            </FadeInView>
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

    AnimationWindow: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
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