import React, { useEffect, useState } from 'react';
import { Image, Text, View, Pressable, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginStatus, setImage } from '../../Slices/Data/DataSlice';
import Logos from '../../Components/Logos';
import { globalStyles } from '../../Components/styles';
import * as ImagePicker from 'expo-image-picker';
import bg from '../../assets/bg.png';

export default function Profile({ navigation }) {
  const [users, setUsers] = useState([]);
  const username = useSelector((state) => state.data.username);
  const dispatch = useDispatch();

  

  useEffect(() => {
    // Fetch user data from the API
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://onlinebugaw.pythonanywhere.com/users/');

        if (response.ok) {
          const userData = await response.json();
          setUsers(userData);
        } else {
          console.error('Error fetching users:', response.status);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUser = users.find((user) => user.username === username);

  const ageInYears = filteredUser?.birthday
  ? Math.floor((new Date() - new Date(filteredUser.birthday)) / (1000 * 60 * 60 * 24 * 365.25))
  : null;

  return (
    <ImageBackground source={bg} style={globalStyles.background}>
      <View style={globalStyles.container3}>
        <View style={globalStyles.logoView}>
          <Logos navigation={navigation} />
        </View>
        <Text style={[globalStyles.title2, { marginBottom: -50, textAlign: 'center' }]}>Profile</Text>
       
        <Text style={[globalStyles.labels1, { textDecorationLine: 'underline' }]}>
        {filteredUser.first_name} {filteredUser.last_name}, {ageInYears || 'Unknown'}
        </Text>
        <Text style={globalStyles.labels}>Interested in: {interest}</Text>
        <View style={[globalStyles.labels11, { backgroundColor: '#461257' }]}>
          <Text style={[globalStyles.labelss, { height: 90 }]}>Bio: i love online bugaw</Text>
          <Text style={[globalStyles.labelss, { height: 40, marginTop: 0 }]}>Address: Cagayan de Oro City</Text>
        </View>
        <View style={{ flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
          <Pressable
            style={globalStyles.buttons}
            onPress={() => {
              dispatch(setLoginStatus(''));
              navigation.replace('Dashboard');
            }}
          >
            <Text style={globalStyles.buttonsLabels}>Edit Profile</Text>
          </Pressable>
          <Pressable
            style={globalStyles.buttons}
            onPress={() => {
              dispatch(setLoginStatus(''));
              navigation.replace('Dashboard');
            }}
          >
            <Text style={globalStyles.buttonsLabels}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
