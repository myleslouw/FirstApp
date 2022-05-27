import { Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

const FadeInView = (props) => {

    const FadeInProgress = useRef(new Animated.Value(0)).current;
    const FadeOutProgress = useRef(new Animated.Value(1)).current;

    props.Opened ?
    useEffect(() => {
        Animated.timing(
            FadeInProgress,
            {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            }
        ).start()

    }, [FadeInProgress])
    :
    useEffect(() => {
        Animated.timing(
            FadeOutProgress,
            {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            }
        ).start(()=>{
            props.AfterAnimation()
        })

    }, [FadeOutProgress])


    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: props.Opened ? FadeInProgress : FadeOutProgress
            }}
        >
        {props.children}
        </Animated.View>
    )
}

export default FadeInView