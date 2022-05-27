import { Text, View, StyleSheet, TextInput, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import DateButton from './Buttons/DateButton';
import AddButton from './Buttons/AddButton';
import DatePickerComp from './DatePickerComp';
import { FormatTime } from '../ExtensionMethods'
import SlideUpView from './Animations/SlideUpView'



const NewToDoTask = (props) => {

    const [showDateTime, setShowDateTime] = useState(false);
    const [getNewTaskTime, setNewTaskTime] = useState(new Date());
    const [getNewTaskDescription, setNewTaskDescription] = useState("")
    const [animationState, SetAnimationState] = useState(true)

    const closeModal = () => {
        props.setModal(false)
    }



    const SendTaskInfo = () => {
        props.NewTask({ dataId: 99, time: getNewTaskTime, description: getNewTaskDescription })
        closeModal();
    }


    return (
        <Pressable onPress={() => SetAnimationState(false)} style={NewStyles.container}>
            <SlideUpView 
                style={NewStyles.AnimationWindow} 
                Opened={animationState} 
                AfterAnimation={closeModal}>
                    
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                    colors={['#11998e', '#38ef7d']}
                    style={NewStyles.Outline}>

                    <View style={NewStyles.Background}>

                        <Text style={NewStyles.Texts}>Time:</Text>
                        <View style={NewStyles.TimeSection}>
                            <Text style={NewStyles.Texts}>{FormatTime(getNewTaskTime)}</Text>
                            <DateButton DateButtonClicked={() => setShowDateTime(true)} />
                        </View>

                        <Text style={NewStyles.Texts}>Details:</Text>
                        <View style={NewStyles.DescriptionSection}>
                            <TextInput style={NewStyles.DescInput}
                                placeholder={"Task Description..."}
                                placeholderTextColor='white'
                                multiline={true}
                                onChangeText={text => setNewTaskDescription(text)}></TextInput>
                        </View>
                        <AddButton bottomMargin={5} AddClick={() => SendTaskInfo()} />
                    </View>
                </LinearGradient>
                <Modal visible={showDateTime} transparent={true}>
                    <DatePickerComp showDateTimeModal={setShowDateTime} TaskDate={setNewTaskTime} />
                </Modal>
            </SlideUpView>
        </Pressable>
    );
}

const NewStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.5)',
    },
    AnimationWindow: {
        width: '100%',
        height: '50%'
    },

    Outline: {
        height: '100%',
        width: '100%',
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
        justifyContent: 'flex-start',
    },

    TimeSection: {
        marginTop: 5,
        padding: 5,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15
    },

    DescriptionSection: {
        marginTop: 5,
        marginBottom: 10,
        width: '90%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15,
        minHeight: 50
    },
    DescInput: {
        height: '100%',
        width: '95%',
        margin: 10,
        color: 'white',
        fontSize: 15,
        padding: 10,
        textAlignVertical: 'top',
        maxWidth: 400,
    },
    Texts: {
        color: 'white',
        fontSize: 18,
        margin: 10
    }
})

export default NewToDoTask