import React from 'react'
import { View,Text,StyleSheet, } from 'react-native';


export default function NavBar({title}) {
    return(
        <View style={NavBarStyle.navbar}>
            <Text style={NavBarStyle.text}>{title}</Text>
        </View>
    )
};


const NavBarStyle = StyleSheet.create({
    navbar:{
        backgroundColor:'#3f3d3d',
        flexDirection:'column',
        justifyContent:'center',
        paddingTop:25
    },
    text:{
        color:'#33cc91',
        fontSize:25,
        marginVertical:10,
        textAlign:'center'
    }
})