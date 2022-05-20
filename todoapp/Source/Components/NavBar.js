import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NavBar = () => {
    return (
        <View style={styles.NavBarContainer}>
            <View style={styles.leftView}>
                <Text style={styles.navText}>DoYourShit</Text>
            </View>
            <View style={styles.rightView}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    NavBarContainer: {
        width: '100%',
        paddingTop: 20,
        paddingLeft: 15,
        paddingBottom: 15,
        display: 'flex',
        alignItems: 'flex-start',
    },

    leftView: {

    },

    rightView: {

    },

    navText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    }
})

export default NavBar