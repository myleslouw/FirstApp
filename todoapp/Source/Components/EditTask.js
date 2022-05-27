import { Text, View, StyleSheet, TextInput, Modal, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import SetButton from './Buttons/SetButton';
import CancelButton from './Buttons/CancelButton';
import SlideUpView from './Animations/SlideUpView';
import DateButton from './Buttons/DateButton';
import { FormatTime } from '../ExtensionMethods';
import DatePickerComp from './DatePickerComp';


const EditTask = (props) => {
    const [showDateTime, setShowDateTime] = useState(false);
    const [animationState, SetAnimationState] = useState(true)
    const [EdittedDate, setEdittedDate] = useState(props.CurrentTaskTime)
    const [EdittedDescription, setEdittedDescription] = useState(props.CurrentTaskDescription)

    const closeModal = () => {
        props.ShowEditTask(false)
    }

    const changeDetails = () => {
        //give the edittedDate and EdittedDescription to above to give above and change there
        props.ChangeTaskDetails({dataId: props.taskId, time: EdittedDate, description: EdittedDescription})
    }

    return (
        <Pressable onPress={() => SetAnimationState(false)} style={EditTaskStyles.container}>
            <SlideUpView 
                style={EditTaskStyles.AnimationWindow} 
                Opened={animationState} 
                AfterAnimation={closeModal}>
                    
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                    colors={['#11998e', '#38ef7d']}
                    style={EditTaskStyles.Outline}>

                    <View style={EditTaskStyles.Background}>

                        <Text style={EditTaskStyles.Texts}>Time:</Text>
                        <View style={EditTaskStyles.TimeSection}>
                            <Text style={EditTaskStyles.Texts}>{FormatTime(EdittedDate)}</Text>
                            <DateButton DateButtonClicked={() => setShowDateTime(true)} />
                        </View>

                        <Text style={EditTaskStyles.Texts}>Details:</Text>
                        <View style={EditTaskStyles.DescriptionSection}>
                            <TextInput style={EditTaskStyles.DescInput}
                                value={EdittedDescription}
                                placeholderTextColor='white'
                                multiline={true}
                                onChangeText={text => setEdittedDescription(text)}></TextInput>
                        </View>
                        <View style={EditTaskStyles.ButtonContainer}>
                            <CancelButton CancelButtonClicked={()=> SetAnimationState(false)}/>
                            <SetButton SetButtonClicked={() => {SetAnimationState(false); changeDetails()}}/>
                        </View>
                    </View>
                </LinearGradient>
                <Modal visible={showDateTime} transparent={true}>
                    <DatePickerComp showDateTimeModal={setShowDateTime} TaskDate={setEdittedDate} />
                </Modal>
            </SlideUpView>
        </Pressable>
    );
}

const EditTaskStyles = StyleSheet.create({
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
        margin: 10
    }
})

export default EditTask