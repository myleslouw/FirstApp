import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const SlideUpView = (props) => {
  const AnimationProgress = useRef(new Animated.Value(400)).current  // Initial value for opacity: 0
  const ClosingAnimationProgress = useRef(new Animated.Value(0)).current


  if(props.Opened) {
    useEffect(() => {
      Animated.timing(
          AnimationProgress,
        {
          toValue: 0,
          duration: 100,
          useNativeDriver: 'true'
        }
      ).start();
    }, [AnimationProgress])
  } else {
    useEffect(() => {
      Animated.timing(
          ClosingAnimationProgress,
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
  }


  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        transform: [ {translateY : props.Opened ? AnimationProgress : ClosingAnimationProgress} ],         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default SlideUpView