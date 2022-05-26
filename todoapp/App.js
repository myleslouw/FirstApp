/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, StyleSheet, Modal, StatusBar, Animated } from 'react-native'
import NavBar from './Source/Components/NavBar';
import TodoTask from './Source/Components/TodoTask';
import AddButton from './Source/Components/AddButton';
import { exampleData } from './Source/Data'
import NewToDoTask from './Source/Components/NewToDoTask';


const App = () => {

  const AnimationProgress = useRef(new Animated.Value(0)).current
  const [appExampleData, setAppExampleData] = useState(exampleData)
  const [AddNew, setAddNew] = useState(false)
  const [getNewTask, setNewTask] = useState({ dataId: 420, time: new Date(), description: '' });
  const firstRender = useFirstRender();   //used to check for updates after the first render
  let newID = useRef(0)


  const CompleteTask = (taskId) => {
    setAppExampleData(appExampleData.filter(task => task.dataId !== taskId))    //deletes the item with that id from the array
  }

  const DeleteTask = (taskId) => {
    console.log("deleting with ID: " + taskId)
    setAppExampleData(appExampleData.filter(task => task.dataId !== taskId))
  }

  const SortList = () => {
    const sorted = [...appExampleData].sort((date1, date2) => { return date1.time - date2.time })
    setAppExampleData(sorted);
  }

  function useFirstRender() {
    const _firstRender = useRef(true);  //runs onces at the start and then sets the bool to false

    useEffect(() => {
      _firstRender.current = false;
    }, []);

    return _firstRender.current;
  }

  useEffect(() => {   //adds a new todo to the array of todos
    if (!firstRender) {
      console.log("newID: " + newID.current)
      setAppExampleData([...appExampleData, { dataId: newID.current, time: getNewTask.time, description: getNewTask.description }])
      newID.current++;
    }
  }, [getNewTask]);

  useEffect(() => {
    Animated.timing(
      AnimationProgress, {
        toValue: 1,
        duration: 2000
      }
    ).start();
  }, [AnimationProgress])


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" style="dark-content" />
      <NavBar SortClicked={SortList} />
      <View style={styles.content}>
        <ScrollView decelerationRate="fast">
          {/* Where all the todoTasks show up */}
          {appExampleData.map((todoTask) => {
            return (
              <TodoTask
                key={todoTask.dataId}
                taskId={todoTask.dataId}
                taskTime={todoTask.time}
                taskText={todoTask.description}
                DeleteFunction={() => DeleteTask(todoTask.dataId)}
                CompleteFunction={() => CompleteTask(todoTask.dataId)} />
            )
          })}

        </ScrollView>
      </View>
      <AddButton bottomMargin={8} AddClick={() => { setAddNew(true) }} />
      <Modal visible={AddNew} transparent={true}>
        <NewToDoTask setModal={setAddNew} NewTask={setNewTask} AnimationState={AddNew}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 1)'
  },

  content: {
    width: '100%',
    margin: 0,
    flex: 1,
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },

  AddButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: 'red',
  },

  AddText: {
    padding: 10,
    color: 'white',
  },
})
export default App;
