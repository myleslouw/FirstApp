import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const SlideUpView = (props) => {
  const AnimationProgress = useRef(new Animated.Value(400)).current  // Initial value for position: 400
  const ClosingAnimationProgress = useRef(new Animated.Value(0)).current  //Inital value for Position: 0


  props.Opened ? 
    useEffect(() => {
      Animated.timing(
          AnimationProgress,      //the animation for sliding up
        {
          toValue: 0,
          duration: 100,
          useNativeDriver: 'true'
        }
      ).start();
    }, [AnimationProgress])
  :
    useEffect(() => {
      Animated.timing(
          ClosingAnimationProgress, //the animation for sliding down while exiting
        {
          toValue: 400,
          duration: 100,
          useNativeDriver: true
        }
      ).start(() => {
        //completion call back
        props.AfterAnimation()
      });
    }, [ClosingAnimationProgress])
  


  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        transform: [ {translateY : props.Opened ? AnimationProgress : ClosingAnimationProgress} ],   //binds the Y locaiton to the value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default SlideUpView