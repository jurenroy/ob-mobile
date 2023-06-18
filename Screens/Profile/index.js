import React, { useEffect, useState } from 'react';
import { Image, Text, View, Pressable, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Slices/Data/DataSlice';
import Logos from '../../Components/Logos';
import { globalStyles } from '../../Components/styles';
import * as ImagePicker from 'expo-image-picker';
import bg from '../../assets/bg.png';

export default function Profile({ navigation, route }) {
  const [userData, setUserData] = useState(null);
  const { username } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://onlinebugaw.pythonanywhere.com/users/');
        if (response.ok) {
          const data = await response.json();
          const filteredUser = data.find((user) => user.username === username);
          setUserData(filteredUser);
        } else {
          console.error('Error fetching user data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  const ageInYears = userData?.birthday
    ? Math.floor((new Date() - new Date(userData.birthday)) / (1000 * 60 * 60 * 24 * 365.25))
    : null;

  return (
    <ImageBackground source={bg} style={globalStyles.background}>
      <View style={globalStyles.container3}>
        <View style={globalStyles.logoView}>
          <Logos navigation={navigation} />
        </View>
        <Text style={[globalStyles.title2, { marginBottom: -50, textAlign: 'center' }]}>Profile</Text>
        
        <Text style={[globalStyles.labels1, { textDecorationLine: 'underline' }]}>
        {userData?.first_name} {userData?.last_name}, {ageInYears || 'Unknown'}
        </Text>
        <Text style={globalStyles.labels}>Interested in: {userData?.gender === 'Male' ? 'Female' : 'Male'}</Text>
        <View style={[globalStyles.labels11, { backgroundColor: '#461257' }]}>
          <Text style={[globalStyles.labelss, { height: 90 }]}>Bio: i love online bugaw</Text>
          <Text style={[globalStyles.labelss, { height: 40, marginTop: 0 }]}>Address: Cagayan de Oro City</Text>
        </View>
        <View style={{ flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
          <Pressable
            style={globalStyles.buttons}
            onPress={() => {
              dispatch(logout());
              navigation.replace('Dashboard');
            }}
          >
            <Text style={globalStyles.buttonsLabels}>Edit Profile</Text>
          </Pressable>
          <Pressable
            style={globalStyles.buttons}
            onPress={() => {
              dispatch(logout());
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
