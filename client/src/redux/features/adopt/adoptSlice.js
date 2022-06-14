import { createSlice } from '@reduxjs/toolkit'
import {
    getAdoptablePets,
    extraGetAdoptablePets,
} from '../../asyncActions/pet/getAdoptablePets'
import { getPetById, extraGetPetById } from '../../asyncActions/pet/getPetById'
import {
    createPetAdoption,
    extraCreatePetAdoption,
} from '../../asyncActions/pet/createPetAdoption'

const initialState = {
    adoptPets: [],
    petDetail: {},
    status: 'loading',
    statusCreate: 'loading',
    statusDetail: 'loading',
    error: '',
}

const adoptSlice = createSlice({
    name: 'adopt', // name of the state
    initialState,
    reducers: {
        cleanPetDetail: (state) => {
            state.petDetail = {}
            state.statusDetail = 'loading'
        },
        cleanStatusCreate: (state) => {
            state.statusCreate = 'loading'
        },
    },
    extraReducers: {
        ...extraGetAdoptablePets,
        ...extraGetPetById,
        ...extraCreatePetAdoption,
    },
})

export { getAdoptablePets, getPetById, createPetAdoption }
export const { cleanPetDetail, cleanStatusCreate } = adoptSlice.actions
export default adoptSlice.reducer
