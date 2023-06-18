import { useState } from 'react';
import { Text, View, Pressable, Image, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { globalStyles } from '../../Components/styles';
import bg from '../../assets/bg.png';
import axios from 'axios';

export default function Upload({ navigation, route }) {
  const { username } = route.params;
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn === true);
  const [profilePic, setProfilePic] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePic(result.assets[0].uri);
    }
  };

  const handleFormSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('profile_pic', {
        uri: profilePic,
        type: 'image/jpeg',
        name: 'profile.jpg',
      });

      const response = await axios.post(
        `https://onlinebugaw.pythonanywhere.com/update-profile/${username}/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Token 7a75f7cd22326a6d3c13112d856e55644ef39592',
          },
        }
      );

      console.log(response.data);
      if (isLoggedIn) {
        navigation.navigate('Profile');
      } else {
        navigation.replace('Login');
      }
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const handleCancelButtonPress = () => {
    if (isLoggedIn) {
      navigation.navigate('Profile');
    } else {
      navigation.replace('Login');
    }
  };

  return (
    <ImageBackground source={bg} style={globalStyles.background}>
      <View style={globalStyles.container3}>
        <Text style={[globalStyles.title2, { marginBottom: -50, textAlign: 'center' }]}>Profile Picture</Text>
        {profilePic && (
          <Image
            source={{ uri: profilePic }}
            style={{ width: 250, height: 250, justifyContent: 'center', marginTop: 15, marginLeft: 50, borderRadius: 200 }}
          />
        )}
        <Pressable style={[globalStyles.buttonss, { marginTop: 50, fontSize: 18 }]} onPress={pickImage}>
          <Text style={[globalStyles.labels, { marginTop: 50, marginLeft: 200, fontSize: 18 }]}>Upload Image</Text>
        </Pressable>

        <Text style={[globalStyles.labels, { marginTop: 20, marginLeft: 35, fontSize: 18 }]}>
          Please Upload Photo for your Profile{"\n"}
        </Text>

        <View style={{ flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
          <Pressable style={globalStyles.buttons} onPress={handleFormSubmit}>
            <Text style={globalStyles.buttonsLabels}>Finish</Text>
          </Pressable>
          <Pressable style={globalStyles.buttons} onPress={handleCancelButtonPress}>
            <Text style={globalStyles.buttonsLabels}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
