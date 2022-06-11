import { createSlice } from '@reduxjs/toolkit'
import {
    extraGetAllProducts,
    getAllProducts,
} from '../../asyncActions/product/getAllProducts'

import {
    postCreateProducts,
    extraPostCreateProducts,
} from '../../asyncActions/product/postCreateProduct'

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
        ...extraPostCreateProducts,
    },
})

export { getAllProducts, postCreateProducts }
export const { cleanDetail } = productSlice.actions
export default productSlice.reducer
