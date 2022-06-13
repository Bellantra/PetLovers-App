import { createSlice } from '@reduxjs/toolkit'
import {
    extraGetAllProducts,
    getAllProducts,
} from '../../asyncActions/product/getAllProducts'

import {
    postCreateProducts,
    extraPostCreateProducts,
} from '../../asyncActions/product/postCreateProduct'

import {
    getProductById,
    extraGetProductById,
} from '../../asyncActions/product/getProductById'


const initialState = {
    products: [],
    productDetail: {},
    status: 'loading',
    statusDetail: 'loading',
    error: '',
    openModal: false
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
        closeModal: (state) => {
            state.openModal = false
        }
    },
    extraReducers: {
        ...extraGetAllProducts,
        ...extraPostCreateProducts,
        ...extraGetProductById
    },
})

export { getAllProducts, postCreateProducts, getProductById }

export const { cleanDetail,closeModal } = productSlice.actions
export default productSlice.reducer
