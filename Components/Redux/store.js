import { configureStore } from '@reduxjs/toolkit'
import DataSlice from '../../Slices/Data/DataSlice'

export default configureStore({
    reducer: {
        data: DataSlice,
    },
})