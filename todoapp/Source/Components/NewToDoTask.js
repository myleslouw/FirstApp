import { Text, View, StyleSheet, TextInput, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import DateButton from './DateButton';
import AddButton from './AddButton';
import DatePickerComp from './DatePickerComp';


const NewToDoTask = (props) => {

    const [date, setDate] = useState(new Date())
    const [showDateTime, setShowDateTime] = useState(false);

    const closeModal = () => {
        props.setModal(false)
    }

    return (props.trigger) ? (
        <Modal transparent={true} >
            <Pressable onPress={closeModal} style={NewStyles.container}>
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                    colors={['#11998e', '#38ef7d']}
                    style={NewStyles.Outline}>

                    <View style={NewStyles.Background}>
                        
                        <Text style={NewStyles.Texts}>Time:</Text>
                        <View style={NewStyles.TimeSection}>
                            <Text style={NewStyles.Texts}>14:30</Text>
                            <DateButton DateButtonClicked={() => setShowDateTime(true)}/>
                        </View>

                        <Text style={NewStyles.Texts}>Details:</Text>
                        <View style={NewStyles.DescriptionSection}>
                            <TextInput style={NewStyles.DescInput}
                                placeholder={"Task Description..."}
                                placeholderTextColor='white'
                                multiline={true}></TextInput>
                        </View>
                        <AddButton bottomMargin={5} AddClick={()=> console.log('add clicked')}/>
                    </View>
                    <DatePickerComp trigger={showDateTime}/>
                </LinearGradient>
            </Pressable>
            
        </Modal >
    ) : null;
}

const NewStyles = StyleSheet.create({
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