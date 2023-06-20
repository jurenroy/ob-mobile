import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, ImageBackground } from 'react-native';
import { globalStyles } from '../../Components/styles';
import { useSelector } from "react-redux";
import bg from '../../assets/bg.png'

export default function ForgotPassword({navigation}) {
  
  const [data, setData] = useState({
    email: '',
  })

  return (
    <ImageBackground source={bg} style={globalStyles.background}>
    <View style={globalStyles.container}>
      <Image source = {require('../../assets/ob.png')} style = {globalStyles.logoism}/>
      <Text style={globalStyles.title2}>Forgot Password</Text>
      <TextInput
      style={globalStyles.input} 
      placeholder='Email Address' 
      placeholderTextColor='white'
      value={data.email}
      onChangeText={text => {setData({...data,email: text})}}/>

      <Pressable style={[globalStyles.buttons,{width:'70%'}]} onPress={() => {
        if (data.email!=''){
          if (data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            if (data.email === data.email){
              setData({
                email: '',
              })            
              alert("Relax and Remember your password or try to email olbugaw@gmail.com to delete your account HAHAHAHA")
              navigation.replace('Login')
            }else{
              alert("Email does not match")
            }
          }else{
            alert("Invalid Email")
          }
        }else{
          alert("Please Input Email")
        }
        
      } }>
        <Text style={globalStyles.buttonsLabels2}>SEND TO EMAIL ADDRESS</Text>
      </Pressable>
    </View>
    </ImageBackground>
  );
}

