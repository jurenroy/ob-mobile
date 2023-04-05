import { createSlice } from '@reduxjs/toolkit'
import profiled from '../../assets/profiled.png'
import { Image } from 'react-native';

export const DataSlice = createSlice({
    name: 'data',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        loginStatus: '',
        image: Image.resolveAssetSource(profiled).uri,
        number: '',
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setLoginStatus: (state, action) => {
            state.loginStatus = action.payload
        },
        setImage: (state, action) => {
            state.image = action.payload
        },
        setNumber: (state, action) => {
            state.number = action.payload
        },
        
    },
})


export const { setFirstName, setLastName, setEmail, setPassword, setLoginStatus, setImage, setNumber } = DataSlice.actions

export default DataSlice.reducer