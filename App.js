import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { DatePickerIOS, StyleSheet, Text, TextInput, View , ScrollView, FlatList } from 'react-native';
import AddToDo from './src/components/AddToDo';
import ItemTodo from './src/components/ItemTodo';
import NavBar from './src/components/NavBar';



export default function App() {
  const [todo, setTodo] = useState([])

  const add = (title)=>{
    const newTODO = {
      id:Date.now().toLocaleString(),
      title,
    }

    setTodo(prevState=>[...prevState,newTODO])
  }


  return (
    <View style={styles.container}>
      <NavBar title='To Do App' />
      <AddToDo onAdd={add} />
      <FlatList
      data={todo}
      renderItem={({item})=>{
        return( <ItemTodo  title={item.title} />)
      }}
      /> 
      <StatusBar style="auto" />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#585858'
  },
});


// //
// //
// // {/* <DatePickerIOS
// date={new Date(  )}
// /> */}