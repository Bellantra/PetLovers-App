import { createSlice } from '@reduxjs/toolkit'
import {
    extraGetUserInfo,
    getUserInfo,
} from '../../asyncActions/user/getUserInfo'

import {
    extraPutEditUser,
    putEditUser,
} from '../../asyncActions/user/putEditUser'

import { postUser, extraPostUser } from '../../asyncActions/user/postUser'

const initialState = {
    userInfo: undefined,
    status: 'loading',
    error: '',
}

const userSlice = createSlice({
    name: 'user', // name of the state
    initialState,
    reducers: {
        cleanUser : (state) =>{
            state.userInfo = undefined
        }
    },
    extraReducers: {
        ...extraGetUserInfo,
        ...extraPostUser,
        ...extraPutEditUser,
    },
})

export { getUserInfo, postUser, putEditUser }
export const { cleanUser } = userSlice.actions
export default userSlice.reducer
