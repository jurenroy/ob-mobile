import { useState} from 'react';
import { Text, View, TextInput, Pressable, Image } from 'react-native';
import { globalStyles } from '../../Components/styles';
import { useSelector, useDispatch } from "react-redux";
import { setLoginStatus} from '../../Slices/Data/DataSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility} from '../../Components/useTogglePasswordVisibility'

export default function Login({navigation}) {
  const [data, setData] = useState({
    email: '',
    password: '',
    loginStatus: 'Logged',
  })
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const dispatch = useDispatch()
  const storedEmail = useSelector((state) => state.data.email)
  const storedPassword = useSelector((state) => state.data.password)

  return (
    <View style={globalStyles.container}>
      <Image source = {require('../../assets/PAPAPP.png')} style = {globalStyles.logoism}/>
      <Text style={globalStyles.title}>Login</Text>
      <TextInput
      style={globalStyles.input} 
      placeholder='Email Address' 
      value={data.email}
      onChangeText={text => {setData({...data,email: text})}}
      />      
      
      <TextInput 
      secureTextEntry={passwordVisibility}
      style={globalStyles.input} 
      placeholder='Password' 
      value={data.password}      
      onChangeText={text => {setData({...data,password: text})}}
      />
      <Pressable onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
      </Pressable>

      <Pressable style={globalStyles.buttons} onPress={() => {
        if (data.email!=''&&data.password!=''){
          if (data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            if (data.email === storedEmail && data.password === storedPassword){
              setData({
                email: '',
                password: '',
                loginStatus: 'Logged'
              })
              dispatch(setLoginStatus(data.loginStatus))
              navigation.replace('Dashboard')
              alert("Account Logged in")
            }else{
              alert("Invalid Credentials")
            }
          }else{
            alert("Invalid Email")
          }
        }else if (data.email!=''&&data.password==''){
          alert("Please Input Password")
        }else if (data.email==''&&data.password!=''){
          alert("Please Input Email")
        }else{
          alert("Please Input Credentials")
        }
      } }>
          <Text style={globalStyles.buttonsLabels}>Login</Text>
      </Pressable>
      <Text style={globalStyles.hyper} onPress={() => {
        setData({
          email: '',
          password: '',
          })
          navigation.navigate('Forgot Password'); }}>Forgot Password?</Text>
      <Text style={globalStyles.hyper} onPress={() => {
        setData({
          email: '',
          password: '',
          })
         navigation.replace('Registration'); }}>Don't have an account? Register</Text>
      
    </View>
  );
}


