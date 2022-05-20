import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import DeleteButton from './DeleteButton';
import CompleteButton from './CompleteButton';
import EditButton from './EditButton';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'

const TodoTask = (props) => {

  
  const [expanded, setExpanded] = useState(true);

  const ButtonHandler = () => {     //expands and collapses the Task
      setExpanded((prevState) => {
        setExpanded(!prevState)
    })
  }

  const RightSwipe = () => {
    return <DeleteButton DeleteFunction={props.DeleteFunction} style={{paddingVertical: 50}}></DeleteButton>
  }

  const LeftSwipe = () => {
    return <EditButton style={{paddingVertical: 50}}/>
  }

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={RightSwipe} renderLeftActions={LeftSwipe}>
        <Pressable style={[TaskStyles.TaskContainer, {backgroundColor : expanded ? 'black' : 'white'}]} onPress={ButtonHandler}>
          <View>
            <View style={TaskStyles.InitialView}>
              <Text style={[TaskStyles.Text, {color: expanded ? 'white' : 'black'}]}>{props.taskTime}</Text>
              <Text style={[TaskStyles.Text , {color: expanded ? 'white' : 'black'}]}
                numberOfLines={expanded ? 1 : 10}
                ellipsizeMode='tail'>{props.taskText}</Text>
            </View>

            {!expanded ? <View style={TaskStyles.ExpandedView}>
              <CompleteButton />
            </View> : null}
          </View>
        </Pressable>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

const TaskStyles = StyleSheet.create({
  TaskContainer: {
    margin: 8,
    backgroundColor: 'black',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    borderRadius: 15,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 13,
  },

  InitialView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ExpandedView: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 13,
    
  },
  Text: {
    fontSize: 15,
    maxWidth: 200,
  }
})

TodoTask.defaultProps = {
  taskTime: "10:00",
  taskText: "Default",
  otherText: "no"
}

export default TodoTask