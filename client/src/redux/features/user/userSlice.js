import { createSlice } from '@reduxjs/toolkit'
import {
    extraGetUserInfo,
    getUserInfo,
} from '../../asyncActions/user/getUserInfo'

const initialState = {
    userInfo: undefined,
    status: 'loading',
    error: '',
}

const userSlice = createSlice({
    name: 'user', // name of the state
    initialState,
    reducers: {},
    extraReducers: {
        ...extraGetUserInfo,
    },
})

export { getUserInfo }

export default userSlice.reducer
