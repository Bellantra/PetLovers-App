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
    putProduct,
    extraPutProduct,
} from '../../asyncActions/product/putProduct'

import {
    getProductById,
    extraGetProductById,
} from '../../asyncActions/product/getProductById'

const initialState = {
    products: [],
    productDetail: {},
    status: 'loading',
    statusCreate: 'loading',
    statusEdit: 'loading',
    statusDetail: 'loading',
    error: '',
    openModal: false,
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
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(
                (product) => product.id === action.payload.id
            )
            state.products[index] = action.payload
        },
        cleanCreateStatus: (state) => {
            state.statusCreate = 'loading'
        },
        cleanEditStatus: (state) => {
            state.statusEdit = 'loading'
        },
    },
    extraReducers: {
        ...extraGetAllProducts,
        ...extraPostCreateProducts,
        ...extraGetProductById,
        ...extraPutProduct,
    },
})

export { getAllProducts, postCreateProducts, putProduct, getProductById }

export const { cleanDetail, closeModal, cleanCreateStatus, cleanEditStatus } =
    productSlice.actions
export default productSlice.reducer
