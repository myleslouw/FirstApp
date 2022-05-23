/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Modal } from 'react-native'
import NavBar from './Source/Components/NavBar';
import TodoTask from './Source/Components/TodoTask';
import AddButton from './Source/Components/AddButton';
import { exampleData } from './Source/Data'
import NewToDoTask from './Source/Components/NewToDoTask';
import { FormatTime } from './Source/ExtensionMethods';


const App = () => {


  const [appExampleData, setAppExampleData] = useState(exampleData)
  const [AddNew, setAddNew] = useState(false)
  const [getNewTask, setNewTask] = useState({dataId: 0, time: new Date(), description: ''});
  const [getID, setID] = useState(0)

  const newID = () => {
    setID(prevCount => prevCount + 1)
    console.log('ID is: ' + getID)
    return getID
  }

  const DeleteItem = (itemId) => {    
    setAppExampleData(appExampleData.filter(task => task.dataId !== itemId))    //deletes the item with that id from the array
  }


  useEffect(() => {   //adds a new todo to the array of todos
    setAppExampleData([...appExampleData, {dataId: 22, time: FormatTime(getNewTask.time), description: getNewTask.description}])
  }, [getNewTask]);

  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.content}>
        <ScrollView style={styles.scrollView} decelerationRate="fast">
          {/* Where all the todoTasks show up */}
          {appExampleData.map((todoTask, index) => {
            return (
              <TodoTask
                key={index}
                taskId={index}
                taskTime={todoTask.time}
                taskText={todoTask.description }
                DeleteFunction={() => DeleteItem(todoTask.dataId)} />
            )
          })}

        </ScrollView>
      </View>
      <AddButton bottomMargin={8} AddClick={() => {setAddNew(true)}} />
      <Modal visible={AddNew} transparent={true}>
        <NewToDoTask setModal={setAddNew} NewTask={setNewTask}/>
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

  scrollView: {
    //backgroundColor: 'rgba(100, 0, 0, 0.9)'
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
