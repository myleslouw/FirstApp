/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Pressable, Text } from 'react-native'
import NavBar from './Source/Components/NavBar';
import TodoTask from './Source/Components/TodoTask';
import AddButton from './Source/Components/AddButton';
import { exampleData } from './Source/Data'
import NewToDoTask from './Source/Components/NewToDoTask';


const App = () => {


  const [appExampleData, setAppExampleData] = useState(exampleData)
  const [AddNew, setAddNew] = useState(false)

  const ShowItems = () => {
    appExampleData.map((todoTask) => {
      return (
        <TodoTask
          key={todoTask.dataId}
          taskId={todoTask.dataId}
          taskTime={todoTask.time}
          taskText={todoTask.description}
          DeleteFunction={DeleteItem} />
      )
    })
  }

  const DeleteItem = (itemId) => {    
    setAppExampleData(appExampleData.filter(task => task.dataId !== itemId))    //deletes the item with that id from the array
    console.log("should delete")
    console.log(appExampleData.length)
  }

  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.content}>
        <ScrollView style={styles.scrollView} decelerationRate="fast">
          {/* Where all the todoTasks show up */}
          {appExampleData.map((todoTask) => {
            return (
              <TodoTask
                key={todoTask.dataId}
                taskId={todoTask.dataId}
                taskTime={todoTask.time}
                taskText={todoTask.description}
                DeleteFunction={() => DeleteItem(todoTask.dataId)} />
            )
          })}

        </ScrollView>
      </View>
      <AddButton bottomMargin={8} AddClick={() => setAddNew(true)} />
      <NewToDoTask trigger={AddNew} setModal={setAddNew}/>
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
