import { useState} from 'react';
import { Text, View, TextInput, Pressable, Image, ImageBackground } from 'react-native';
import { globalStyles } from '../../Components/styles';
import { useSelector, useDispatch } from "react-redux";
import { setLoginStatus} from '../../Slices/Data/DataSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility} from '../../Components/useTogglePasswordVisibility'
import bg from '../../assets/bg.png'
import cont from '../../assets/cont.png'

export default function Login({navigation}) {
  const [data, setData] = useState({
    username: '',
    password: '',
    loginStatus: 'Logged',
  })
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const dispatch = useDispatch()
  const storedUsername = useSelector((state) => state.data.username)
  const storedPassword = useSelector((state) => state.data.password)

  return (
    <ImageBackground source={bg} style={globalStyles.background}>
      
    <View style={globalStyles.container}>
      
      <Image source = {require('../../assets/ob.png')} style = {globalStyles.logoism}/>
      <Text style={globalStyles.title}>Login</Text>
      <TextInput
      style={globalStyles.input} 
      placeholder='Email Address' 
      placeholderTextColor={'white'}
      value={data.username}
      onChangeText={text => {setData({...data,username: text})}}
      />      
      
      <View style={globalStyles.inputContainer}>
        <TextInput 
          secureTextEntry={passwordVisibility}
          style={globalStyles.inputpass} 
          placeholder='Password' 
          placeholderTextColor={'white'}
          value={data.password}      
          onChangeText={text => {setData({...data,password: text})}}
        />
        <Pressable onPress={handlePasswordVisibility} style={globalStyles.eyeIcon}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="white" />
        </Pressable>
      </View>

      <Pressable style={globalStyles.buttons} onPress={() => {
        if (data.username!=''&&data.password!=''){
          if (data.username.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            if (data.username === storedUsername && data.password === storedPassword){
              setData({
                username: '',
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
        }else if (data.username!=''&&data.password==''){
          alert("Please Input Password")
        }else if (data.username==''&&data.password!=''){
          alert("Please Input Email")
        }else{
          alert("Please Input Credentials")
        }
      } }>
          <Text style={globalStyles.buttonsLabels}>Login</Text>
      </Pressable>
      <Text style={globalStyles.hyper} onPress={() => {
        setData({
          username: '',
          password: '',
          })
          navigation.navigate('Forgot Password'); }}>Forgot Password?</Text>
      <Text style={globalStyles.hyper} onPress={() => {
        setData({
          username: '',
          password: '',
          })
         navigation.replace('Registration'); }}>Don't have an account? Register</Text>
      
    
    </View>
    </ImageBackground>
  );
}


