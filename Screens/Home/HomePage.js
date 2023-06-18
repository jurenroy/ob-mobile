import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { globalStyles } from '../../Components/styles';
import { useSelector } from "react-redux";

const UserDisplay = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1); // Set currentIndex to 1
  const username = useSelector((state) => state.data.username);

  useEffect(() => {
    fetch('https://onlinebugaw.pythonanywhere.com/users/')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderUser = (user) => {
    if (user.id === 1 || user.username === username) {
      return currentIndex + 1 < users.length ? renderUser(users[currentIndex + 1]) : null;
    }

    const ageInYears = user.birthday
      ? Math.floor((new Date() - new Date(user.birthday)) / (1000 * 60 * 60 * 24 * 365.25))
      : null;

      const profilePicSource = user.profile_pic ? { uri: user.profile_pic } : require('../../assets/profiled.png');
    return (
      <View key={user.id} style={styles.userContainer}>
        <View style={styles.userInfo}>
          <Image style={styles.profilePic} source={profilePicSource} /> 
          <Text style={[styles.username, { textDecorationLine: 'underline' }]}>{`${user.first_name} ${user.last_name}, ${ageInYears || 'Unknown'}` }</Text>
          <Text style={styles.int}>Interested in: {user.gender === 'Male' ? 'Female' : 'Male'}</Text>
        </View>
      </View>
    );
  };

  const displayNextUser = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <View style={styles.container}>
      {users.length > 0 && renderUser(users[currentIndex])}
      <View style={styles.heartContainer}>
        <Pressable onPress={displayNextUser}>
          <Image
            source={require('../../assets/heart2.png')}
            style={globalStyles.logoHearts}
          />
        </Pressable>
        <Pressable onPress={displayNextUser}>
          <Image
            source={require('../../assets/heart1.png')}
            style={globalStyles.logoHearts}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 100,

  },
  userInfo: {
    flex: 1,
    alignItems: 'center', // Align items in the center horizontally
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  int: {
    fontSize: 17,
    color: 'white'
  },
  heartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default UserDisplay;
