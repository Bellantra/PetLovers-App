import { createSlice } from '@reduxjs/toolkit'
import {
    extraGetAllProducts,
    getAllProducts,
} from '../../asyncActions/product/getAllProducts'

import {

    postCreateProducts,
    extraPostCreateProducts,
} from '../../asyncActions/product/postCreateProduct'
import { putProduct, extraPutProduct } from '../../asyncActions/product/putProduct'


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
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id)
            state.products[index] = action.payload
        }
            

    },
    extraReducers: {
        ...extraGetAllProducts,
        ...extraPostCreateProducts,
        ...extraPutProduct
    },
})

export { getAllProducts, postCreateProducts, putProduct }

export const { cleanDetail } = productSlice.actions
export default productSlice.reducer
