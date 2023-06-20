import { createSlice } from '@reduxjs/toolkit'

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


export const { login, logout } = DataSlice.actions

export default DataSlice.reducer