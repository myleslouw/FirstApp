import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import DatePicker from 'react-native-date-picker'

export default function DatePickerComp(props) {

    const [date, setDate] = useState(new Date())


  return (props.trigger) ? (
    <View style={DatePickerStyles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#11998e', '#38ef7d']}
                style={DatePickerStyles.Outline}>
                <View style={DatePickerStyles.Background}>

                    <DatePicker date={date} fadeToColor='black' textColor='white' style={{backgroundColor: 'black'}}/>
                </View>
            </LinearGradient>
        </View>
  ) : null;
}

const DatePickerStyles = StyleSheet.create({
    container: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'center', alignItems: 'center'
    },

    Outline: {
        margin: 0,
        borderRadius: 20,
        alignItems: "center",
    },

    Background: {
        margin: 10,
        backgroundColor: "black",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 13
    },

    TimeSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    DescriptionSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Input: {
        height: 40,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1,
        color: 'white',
        fontSize: 15,
        padding: 10,
        minWidth: 100
    },
    Texts: {
        color: 'white',
        fontSize: 15,
        margin: 10
    }
})