import { createSlice } from '@reduxjs/toolkit'
import {
    extraGetAllProducts,
    getAllProducts,
} from '../../asyncActions/product/getAllProducts'

import {
    extraCreateProduct,
    createProduct,
} from '../../asyncActions/product/createProduct'


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
        createProduct: (state, action) => {
            state.products.push(action.payload)
        }
    },
    extraReducers: {
        ...extraGetAllProducts, ...extraCreateProduct,
        
    },
})

export { getAllProducts, createProduct }
export const { cleanDetail } = productSlice.actions
export default productSlice.reducer
