import { createSlice } from '@reduxjs/toolkit'
import {
    extraGetAllShelters,
    getAllShelters,
} from '../../asyncActions/shelter/getAllShelters'
import {
    extraGetShelterById,
    getShelterById,
} from '../../asyncActions/shelter/getShelterById'

const initialState = {
    shelters: [],
    shelterDetail: {},
    status: 'loading',
    statusDetail: 'loading',
    error: '',
}

const shelterSlice = createSlice({
    name: 'shelter', // name of the state
    initialState,
    reducers: {},
    extraReducers: {
        ...extraGetAllShelters,
        ...extraGetShelterById,
    },
})

export { getAllShelters, getShelterById }
export default shelterSlice.reducer
