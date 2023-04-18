import { useState } from 'react';
import { Text, View, TextInput, Pressable,Image, ImageBackground} from 'react-native';
import { globalStyles } from '../../Components/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName,setGender,setBirthday, setUsername, setPassword, setImage } from '../../Slices/Data/DataSlice';
import profiled from '../../assets/profiled.png'
import { Petss } from '../../Components/Petss';
import { Statetus } from '../../Components/Statetus';
import { Conv } from '../../Components/Conv';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility} from '../../Components/useTogglePasswordVisibility'
import { useToggleConfirmPasswordVisibility } from '../../Components/useToggleConfirmPasswordVisibility';
import { handleRegistration } from '../../Components/handleRegistration';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-modern-datepicker';
import bg from '../../assets/bg.png'
import { createUserProfile } from '../../api';

export default function Registration({navigation}) {
  const dispatch = useDispatch()
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  const { confirmPasswordVisibility, rightIconConfirm, handleConfirmPasswordVisibility } = useToggleConfirmPasswordVisibility();

    const [data, setData] = useState({
      first_name: '',
      last_name: '',
      gender: '',
      birthday: '',
      username: '',
      password: '',
      
    });

    const [data2, setData2] = useState({
      confirmPassword: '',
    });

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
    setData({ ...data, birthday: date });
  };
  
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
        setData({ ...data, gender: value });
      };
 
  return (
    <ImageBackground source={bg} style={globalStyles.background}>
    <View style={globalStyles.container}>
      <Image source = {require('../../assets/ob.png')} style = {globalStyles.logoism}/>
      <Text style={globalStyles.lable}></Text>
      <Text style={globalStyles.title}>Registration</Text>
      <TextInput
      style={globalStyles.input} 
      placeholder='First Name' 
      placeholderTextColor={'white'}
      value={data.first_name}
      onChangeText={text => {setData({...data,first_name: text})}}/>
      
      <TextInput
      style={globalStyles.input} 
      placeholder='Last Name' 
      placeholderTextColor={'white'}
      value={data.last_name}
      onChangeText={text => {setData({...data,last_name: text})}}/>
      
      <Dropdown
          style={[globalStyles.dropdown, isFocus && { borderColor: '#7EE0FF' }]}
          data={gender}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Gender' : '...'}
          placeholderStyle={{ textAlign: "center",color:'white' }}
          value={data.gender}
          itemTextStyle={{textAlign: 'center', marginTop:-15,marginBottom:-15,color:'white', backgroundColor:'#33083a'}} 
          selectedTextStyle={{textAlign: 'center', alignItems: 'center', justifyContent: 'center',color:'white'}} 
          onChange={handleSelect}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          textStyle={{textAlign: 'center', alignItems: 'center', justifyContent: 'center' }} 
          valueTextStyle={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
          renderValue={() => {
            if (value) {
              return (
                <Text style={globalStyles.value}>
                  {value}
                </Text>
              );
            }
            return null;
          }}
        />

      <TextInput
        style={globalStyles.input}
        placeholder="Birthday"
        placeholderTextColor={'white'}
        value={selectedDate}
        onFocus={() => setShowDatePicker(true)}
      />
      {showDatePicker && (
        <DatePicker
          date={selectedDate || new Date()}
          mode="date"
          placeholder="Select date"
          format="DD/MM/YYYY" // Updated format
          minDate="01-01-1900"
          maxDate={new Date()}
          onDateChange={handleDateChange}
        />
      )}

      <TextInput
      style={globalStyles.input} 
      placeholder='Email Address'
      placeholderTextColor={'white'} 
      value={data.username}
      onChangeText={text => {setData({...data,username: text})}}/>

      <View style={globalStyles.inputContainer}>
      <TextInput 
      secureTextEntry = {passwordVisibility}
      style={globalStyles.inputpass} 
      placeholder='Password' 
      placeholderTextColor={'white'}
      value={data.password}
      onChangeText={text => {setData({...data,password: text})}}/>
      <Pressable onPress={handlePasswordVisibility} style={globalStyles.eyeIcon}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="white" />
        </Pressable>
      </View>
      
      <View style={globalStyles.inputContainer}>
      <TextInput 
      secureTextEntry = {confirmPasswordVisibility}
      style={globalStyles.inputpass} 
      placeholder='Confirm Password' 
      placeholderTextColor={'white'}
      value={data2.confirmPassword}
      onChangeText={text => {setData2({...data2,confirmPassword: text})}}/>
        <Pressable onPress={handleConfirmPasswordVisibility} style={globalStyles.eyeIcon}>
          <MaterialCommunityIcons name={rightIconConfirm} size={22} color="white" />
        </Pressable>
      </View>

      <Pressable style={globalStyles.buttons} onPress={ () => {if (data.first_name!=''&&data.last_name!=''&&data.username!=''&&data.password!=''&&data2.confirmPassword!=''){
            if (data.username.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){         
              if (data.password==data2.confirmPassword){
                if (data.password.length>8 && data.password.length>8){
                  dispatch(setFirstName(data.first_name))
                  dispatch(setLastName(data.last_name))
                  dispatch(setGender(data.gender))
                  dispatch(setBirthday(selectedDate))
                  dispatch(setUsername(data.username))
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

                  console.log(data)
                  createUserProfile(data)
                  .then((response) => {
                    console.log(response.data);
                    alert('Successfully Registered!')
                  })
                  .catch((error) => {
                    console.log(error);
                  });
  
                 
                  navigation.replace('Upload Image')
                 
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
            if (data.first_name==''&&data.last_name!=''&&data.username!=''&&data.password!=''&&data2.confirmPassword!=''){
              alert("Please Input Firstname")
            }else if (data.first_name!=''&&data.last_name==''&&data.username!=''&&data.password!=''&&data2.confirmPassword!=''){
              alert("Please Input Lastname")
            }else if (data.first_name!=''&&data.last_name!=''&&data.username==''&&data.password!=''&&data2.confirmPassword!=''){
              alert("Please Input Valid Email")
            }else if (data.first_name!=''&&data.last_name!=''&&data.username!=''&&data.password==''&&data2.confirmPassword!=''){
              alert("Please Input Password")
            }else if (data.first_name!=''&&data.last_name!=''&&data.username!=''&&data.password!=''&&data2.confirmPassword==''){
              alert("Please Confirm password")
            }else if (data.first_name==''||data.last_name==''||data.username==''||data.password==''||data2.confirmPassword==''){
                alert("Please Input Credentials")
              }
          } 
          }}>
        <Text style={globalStyles.buttonsLabels}>Register</Text>
      </Pressable>

      <Text style={globalStyles.hyper} onPress={() => {
        setData({
          username: '',
          password: '',
          })
         navigation.replace('Login'); }}>Already have an account? Login</Text>
    </View>
    </ImageBackground>
  );
}



