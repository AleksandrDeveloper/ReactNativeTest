import React from 'react'
import { View,Text, StyleSheet } from 'react-native';

export default ({title}) => {
    return(
        <View style={style.item}>
            <Text style={style.text}>
                {title} 
            </Text>
        </View>
    )
}


const style = StyleSheet.create({
    item:{
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:10,
        marginVertical:10,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#33cc91'
    },
    text:{
        color:'#fff',
        fontSize:20
    }
})