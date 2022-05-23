import { Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import DatePicker from 'react-native-date-picker'
import SetButton from './SetButton'
import CancelButton from './CancelButton'

export default function DatePickerComp(props) {

    const [getDate, setDate] = useState(new Date())

    let initialDate = new Date();

    const closeModal = () => {
        props.showDateTimeModal(false)
    }

    const SendDate = (newDate) => {
        closeModal();
        props.TaskDate(newDate);                //sends the date object
    }


    return (
        <Pressable onPress={closeModal} style={DatePickerStyle.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={DatePickerStyle.Outline}>
                <View style={DatePickerStyle.Background}>

                    <DatePicker 
                        date={getDate}
                        fadeToColor='black' 
                        textColor='white' 
                        style={DatePickerStyle.DatePicker}
                        onDateChange={date => setDate(date)} />

                    <View style={DatePickerStyle.ButtonContainer}>
                        <CancelButton CancelButtonClicked={closeModal}/>
                        <SetButton SetButtonClicked={() => SendDate(getDate)}/>
                    </View>
                </View>
            </LinearGradient>
        </Pressable>
    )
}

const DatePickerStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    Outline: {
        height: '50%',
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
        justifyContent: 'center',
    },
    DatePicker: {
        margin: 20,
        backgroundColor: 'black',
    },
    ButtonContainer: {
        marginTop: 20,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    Texts: {
        color: 'white',
        fontSize: 15,
        margin: 10
    }
})