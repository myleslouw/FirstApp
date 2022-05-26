import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import SortButton from './SortButton'

const NavBar = (props) => {
    return (
        <View style={styles.NavBarContainer}>
            <Text style={styles.navText}>DoYourShit</Text>
            <SortButton SortButtonClicked={props.SortClicked}/>
        </View>
    )
}

const styles = StyleSheet.create({
    NavBarContainer: {
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: 15,
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    leftView: {

    },

    rightView: {

    },

    Button: {
        alignItems: 'center',
        backgroundColor: 'red'
    },

    navText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    }
})

export default NavBar