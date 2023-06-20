import * as React from 'react';
import { View, Pressable, Image, Text } from 'react-native';
import { globalStyles } from './styles';
import { useSelector } from 'react-redux';
import global from './global';

export default function Logos(props) {
  const username = useSelector((state) => state.data.username);
  const [userProfilePic, setUserProfilePic] = React.useState(null);

  React.useEffect(() => {
    fetch('https://onlinebugaw.pythonanywhere.com/users/')
      .then((response) => response.json())
      .then((data) => {
        const currentUser = data.find((user) => user.username === username);
        setUserProfilePic(currentUser?.profile_pic || null);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username]);

  const profilePicSource = userProfilePic
    ? { uri: `https://onlinebugaw.pythonanywhere.com/${userProfilePic}` }
    : require('../assets/profiled.png');

  return (
    <View style={globalStyles.logoView}>
      <Pressable onPress={() => {props.navigation.replace('Home')}}>
        <Image source={require('../assets/ob.png')} style={globalStyles.logoism2} />
      </Pressable>

      <Pressable onPress={() => {props.navigation.replace('LoveUs')}}>
        <Image source={require('../assets/loveus.png')} style={globalStyles.logoism2} />
      </Pressable>

      <Pressable onPress={() => {props.navigation.replace('DoBook')}}>
        <Image source={require('../assets/dobook.png')} style={[globalStyles.logoism2, { height: 80, marginTop: -5 }]} />
      </Pressable>

      <Pressable onPress={() => {props.navigation.replace('Chats')}}>
        <Image source={require('../assets/messages.png')} style={globalStyles.logoism2} />
      </Pressable>

      <Pressable onPress={() => {props.navigation.replace('Profile', { username })}}>
        <Image source={profilePicSource} style={globalStyles.logoism4} />
      </Pressable>
    </View>
  );
}
