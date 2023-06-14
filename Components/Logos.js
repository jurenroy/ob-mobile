import * as React from 'react';
import { View, Pressable, Image,Text} from 'react-native';
import { globalStyles } from './styles';
import { useSelector } from "react-redux";
import global from './global';



export default function Logos(props) {
   const storedImage = useSelector((state) => state.data.image)

  return(
      <View style={globalStyles.logoView}> 
      <Pressable onPress={() => {props.navigation.replace('Home') } }>
        <Image source = {require('../assets/ob.png')} style = {globalStyles.logoism2}/>
      </Pressable>

      <Pressable onPress={() => {props.navigation.replace('Home(Dogs)')} }>
        <Image source = {require('../assets/loveus.png')} style = {globalStyles.logoism2}/>
      </Pressable>

      <Pressable onPress={() => {props.navigation.replace('Home(Cats)')} }>
        <Image source = {require('../assets/dobook.png')} style = {[globalStyles.logoism2,{height:80,marginTop:-5}]}/>
      </Pressable>

      <Pressable onPress={() => {props.navigation.replace('Chats')}}>
        <Image source = {require('../assets/messages.png')} style = {globalStyles.logoism2}/>
      </Pressable>

      <Pressable onPress={() => {props.navigation.replace('Profile')} }>
      <Image source = {require('../assets/messages.png')} style = {globalStyles.logoism2}/>
      </Pressable>

      </View>  
)}