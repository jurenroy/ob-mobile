// api.js

import axios from 'axios';

// Fetch all user profiles
export const fetchUserProfiles = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/user_profile/');
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

// Create a new user profile
export const createUserProfile = async (data) => {
  try {
    const response = await axios.post('http://localhost:8000/api/user_profile/', data);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}
