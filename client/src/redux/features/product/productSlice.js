import { createSlice } from '@reduxjs/toolkit'
import {
    extraGetAllProducts,
    getAllProducts,
} from '../../asyncActions/product/getAllProducts'

const initialState = {
    products: [],
    productDetail: {},
    status: 'loading',
    statusDetail: 'loading',
    error: '',
}

const productSlice = createSlice({
    name: 'product', // name of the state
    initialState,
    reducers: {
        cleanDetail: (state) => {
            state.productDetail = {}
            state.statusDetail = 'loading'
        },
    },
    extraReducers: {
        ...extraGetAllProducts,
        
    },
})

export { getAllProducts }
export const { cleanDetail } = productSlice.actions
export default productSlice.reducer
