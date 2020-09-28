import React, { useState } from 'react'
import {Button, StyleSheet, TextInput, View, Alert} from 'react-native';

export default function AddToDo({onAdd}) {
    const [value, setvalue] = useState('')

    const pressHandler = (e)=>{
        console.log('fff',e);
        if(value.trim()){
            onAdd(value)
            setvalue('')
        }else{
            Alert.alert('Error not not ')
        }
    }


    return(
        <View style={AddToDoStyle.block}>
            <TextInput 
            onChangeText={text => setvalue(text)}
            value={value}
            style={AddToDoStyle.input}
            placeholder={'Add new task'} 
            keyboardType='default'
            />
            <Button title="Add new" onPress={pressHandler} />
        </View>
    )
};


const AddToDoStyle = StyleSheet.create({
    block:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:10,
        paddingHorizontal:5
    },
    input:{
        width:'70%',
        borderColor:'#33cc91',
        borderStyle:'solid',
        borderRadius:3,
        borderWidth:1,
        fontSize:20,
        color:'#fff',
        paddingHorizontal:5,
        paddingVertical:6
    },
    bottom:{
        borderColor:'#33cc91',
        borderStyle:'solid',
        borderWidth:2,
        color:'red'
    }
})