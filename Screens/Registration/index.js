import { useState } from 'react';
import { Text, View, TextInput, Pressable, Image } from 'react-native';
import { globalStyles } from '../../Components/styles';
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName, setEmail, setPassword, setImage } from '../../Slices/Data/DataSlice';
import profiled from '../../assets/profiled.png'
import { Petss } from '../../Components/Petss';
import { Statetus } from '../../Components/Statetus';
import { Conv } from '../../Components/Conv';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility} from '../../Components/useTogglePasswordVisibility'

export default function Registration({navigation}) {
  const dispatch = useDispatch()
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  return (
    <View style={globalStyles.container}>
      <Image source = {require('../../assets/PAPAPP.png')} style = {globalStyles.logoism}/>
      <Text style={globalStyles.lable}></Text>
      <Text style={globalStyles.title}>Registration</Text>
      <TextInput
      style={globalStyles.input} 
      placeholder='First Name' 
      value={data.firstName}
      onChangeText={text => {setData({...data,firstName: text})}}/>
      
      <TextInput
      style={globalStyles.input} 
      placeholder='Last Name' 
      value={data.lastName}
      onChangeText={text => {setData({...data,lastName: text})}}/>
      
      <TextInput
      style={globalStyles.input} 
      placeholder='Email Address' 
      value={data.email}
      onChangeText={text => {setData({...data,email: text})}}/>
      
      <TextInput 
      secureTextEntry = {passwordVisibility}
      style={globalStyles.input} 
      placeholder='Password' 
      value={data.password}
      onChangeText={text => {setData({...data,password: text})}}/>
      
      <TextInput 
      secureTextEntry = {passwordVisibility}
      style={globalStyles.input} 
      placeholder='Confirm Password' 
      value={data.confirmPassword}
      onChangeText={text => {setData({...data,confirmPassword: text})}}/>

      <Pressable onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
      </Pressable>

      <Pressable style={globalStyles.buttons} onPress={() => {        
        if (data.firstName!=''&&data.lastName!=''&&data.email!=''&&data.password!=''&&data.confirmPassword!=''){
          if (data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){         
            if (data.password==data.confirmPassword){
              if (data.password.length>8 && data.password.length>8){
                dispatch(setFirstName(data.firstName))
                dispatch(setLastName(data.lastName))
                dispatch(setEmail(data.email))
                dispatch(setPassword(data.password)) 
                dispatch(setImage(Image.resolveAssetSource(profiled).uri)) 
                global.state=0
                global.dogState=0
                global.catState=0
                global.idnum= 
                global.dogidnum= 
                global.catidnum= 
                global.chat=   
                Petss.length=0  
                Statetus.length=0
                Statetus.push(0)
                Statetus.push(0)
                Statetus.push(0)
                Statetus.push(0)
                Statetus.push(0)
                Statetus.push(0)
                Statetus.push(0)
                Statetus.push(0)
                Statetus.push(0)
                Statetus.push(0)
                Conv.length=0
                Conv.length=10
                Conv[0]=[]
                Conv[0].push("Interested?          ")
                Conv[1]=[]
                Conv[1].push("Interested?          ")
                Conv[2]=[]
                Conv[2].push("Interested?          ")
                Conv[3]=[]
                Conv[3].push("Interested?          ")
                Conv[4]=[]
                Conv[4].push("Interested?          ")
                Conv[5]=[]
                Conv[5].push("Interested?          ")
                Conv[6]=[]
                Conv[6].push("Interested?          ")
                Conv[7]=[]
                Conv[7].push("Interested?          ")
                Conv[8]=[]
                Conv[8].push("Interested?          ")
                Conv[9]=[]
                Conv[9].push("Interested?          ")

                setData({
                  name1: '',
                  name2: '',
                  username: '',
                  email: '',
                  password1: '',
                  password2: '',
                })
                navigation.replace('Login')
                alert("Account Registered")
              }else{
                alert("Password too weak")
              }              
            }else{
              alert("Password not match")
            }
          }else{
            alert("Invalid Email")
          }
        }else{
          if (data.firstName==''&&data.lastName!=''&&data.email!=''&&data.password!=''&&data.confirmPassword!=''){
            alert("Please Input Firstname")
          }else if (data.firstName!=''&&data.lastName==''&&data.email!=''&&data.password!=''&&data.confirmPassword!=''){
            alert("Please Input Lastname")
          }else if (data.firstName!=''&&data.lastName!=''&&data.email==''&&data.password!=''&&data.confirmPassword!=''){
            alert("Please Input Valid email")
          }else if (data.firstName!=''&&data.lastName!=''&&data.email!=''&&data.password==''&&data.confirmPassword!=''){
            alert("Please Input Password")
          }else if (data.firstName!=''&&data.lastName!=''&&data.email!=''&&data.password!=''&&data.confirmPassword==''){
            alert("Please Confirm password")
          }else if (data.firstName==''||data.lastName==''||data.email==''||data.password==''||data.confirmPassword==''){
              alert("Please Input Credentials")
            }
        }        
      } }>
        <Text style={globalStyles.buttonsLabels}>Register</Text>
      </Pressable>

      <Text style={globalStyles.hyper} onPress={() => {
        setData({
          email: '',
          password: '',
          })
         navigation.replace('Login'); }}>Already have an account? Login</Text>
    </View>
  );
}

