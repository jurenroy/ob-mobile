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

const api = axios.create({
  baseURL: "http://192.168.115.196:8000/",
});

export function createUserProfile(data) {
  return api.post("api/v1/accounts/users/", data);
}
