import { createSlice } from '@reduxjs/toolkit'
import {
    extraGetUserInfo,
    getUserInfo,
} from '../../asyncActions/user/getUserInfo'

import { postUser, extraPostUser } from '../../asyncActions/user/postUser'

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
        ...extraPostUser,
    },
})

export { getUserInfo, postUser }

export default userSlice.reducer
