import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const UnderConstructionPage = ({ navigation }) => {
  const goBack = () => {
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page Under Construction</Text>
      <Text style={styles.description}>This page is currently under construction.</Text>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Back to Content</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginLeft: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFF'
  },
  description: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center',
    color: '#FFF'
  },
  button: {
    backgroundColor:'#7EE0FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    color: '#FFF'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
};

export default UnderConstructionPage;
