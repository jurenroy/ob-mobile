import { useState } from 'react';
<<<<<<< HEAD
import { Text, View, TextInput, Pressable,Image, ImageBackground} from 'react-native';
=======
import { Text, View, TextInput, Pressable, Image, TouchableOpacity,StyleSheet} from 'react-native';
>>>>>>> origin/Ednilan
import DropDownPicker from 'react-native-dropdown-picker';
import { globalStyles } from '../../Components/styles';
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName, setEmail, setPassword, setImage } from '../../Slices/Data/DataSlice';
import profiled from '../../assets/profiled.png'
import { Petss } from '../../Components/Petss';
import { Statetus } from '../../Components/Statetus';
import { Conv } from '../../Components/Conv';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility} from '../../Components/useTogglePasswordVisibility'
import { handleRegistration } from '../../Components/handleRegistration';
<<<<<<< HEAD
import bg from '../../assets/bg.png'
=======
import { Dropdown } from 'react-native-element-dropdown';
>>>>>>> origin/Ednilan



export default function Registration({navigation}) {
  const dispatch = useDispatch()
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
    const [data, setData] = useState({
      firstName: '',
      lastName: '',
      gender: '',
      birthday: '',
      email: '',
      password: '',
      confirmPassword: '',
    });


  
    const genderOptions = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ];
  
    const handleGenderSelect = (value) => {
      setData({ ...data, gender: value });
    }; 

    const gender = [
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' },
      
    ];

   
      const [value, setValue] = useState(null);
      const [isFocus, setIsFocus] = useState(false);
    

      const handleSelect = (item) => {
        setValue(item.value);
        setIsFocus(false);
      };
 
  return (
    <ImageBackground source={bg} style={globalStyles.background}>
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
      
      {/* <DropDownPicker
        open={true}
        items={genderOptions}
        defaultValue={data.gender}
        placeholder="Select Gender"
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(item) => handleGenderSelect(item.value)}
      /> */}

      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          data={gender}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Gender' : '...'}
          placeholderStyle={{ textAlign: "center" }}
          value={value}
          itemTextStyle={{textAlign: 'center', marginTop:-15,marginBottom:-15}} 
          selectedTextStyle={{textAlign: 'center', alignItems: 'center', justifyContent: 'center' }} 
          onChange={handleSelect}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          textStyle={{textAlign: 'center', alignItems: 'center', justifyContent: 'center' }} 
          valueTextStyle={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
          renderValue={() => {
            if (value) {
              return (
                <Text style={styles.value}>
                  {value}
                </Text>
              );
            }
            return null;
          }}
        />

      <TextInput
      style={globalStyles.input} 
      placeholder='Birthday' 
      value={data.birthday}
      onChangeText={text => {setData({...data,birthday: text})}}/>

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

      <Pressable style={globalStyles.buttons} onPress={ () => {if (data.firstName!=''&&data.lastName!=''&&data.email!=''&&data.password!=''&&data.confirmPassword!=''){
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
          }}>
        <Text style={globalStyles.buttonsLabels}>Register</Text>
      </Pressable>

      <Text style={globalStyles.hyper} onPress={() => {
        setData({
          email: '',
          password: '',
          })
         navigation.replace('Login'); }}>Already have an account? Login</Text>
    </View>
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  dropdown: {
    height: '6%',
    width: '75%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 2,
    marginBottom: 15,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    },
  value: {
    position: 'absolute',
    left: 5,
    right: 5,
    textAlign: 'center',
    alignItems:'center',
    opacity: 0,
  },
 

});