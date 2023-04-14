import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import { globalStyles } from '../../Components/styles';
import { useSelector } from "react-redux";
import bg from '../../assets/bg.png'

export default function ForgotPassword({navigation}) {
  const storedfirstName = useSelector((state) => state.data.firstName)
  const storedlastName = useSelector((state) => state.data.lastName)
  const storedEmail = useSelector((state) => state.data.email)
  const storedPassword = useSelector((state) => state.data.password)
  
  const [data, setData] = useState({
    email: '',
  })

  return (
    <ImageBackground source={bg} style={globalStyles.background}>
    <View style={globalStyles.container}>
      <Image source = {require('../../assets/PAPAPP.png')} style = {globalStyles.logoism}/>
      <Text style={globalStyles.title2}>Forgot Password</Text>
      <TextInput
      style={globalStyles.input} 
      placeholder='Email Address' 
      value={data.email}
      onChangeText={text => {setData({...data,email: text})}}/>

      <Pressable style={globalStyles.buttons} onPress={() => {
        if (data.email!=''){
          if (data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            if (data.email === storedEmail){
              setData({
                email: '',
              })            
              alert("From team FF to "+storedEmail+ "\n\n Good day "+storedfirstName+" "+storedlastName+ "\n\n Your password is: " +storedPassword)
              alert("Password sent to Email")
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

