import { createSlice } from '@reduxjs/toolkit'
import profiled from '../../assets/profiled.png'
import { Image } from 'react-native';

export const DataSlice = createSlice({
    name: 'data',
    initialState: {
        isLoggedIn: false,
        username: '',
      },
      reducers: {
        login: (state, action) => {
          state.isLoggedIn = true;
          state.username = action.payload;
        },
        logout: (state) => {
          state.isLoggedIn = false;
          state.username = '';
        },
      },
})


export const { setFirstName, setLastName,setGender,setBirthday, setUsername, setPassword, setLoginStatus, setImage, setNumber } = DataSlice.actions

export default DataSlice.reducer