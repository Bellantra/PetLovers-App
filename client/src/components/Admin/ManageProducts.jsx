import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../redux/asyncActions/product/getAllProducts.js'
import { putProduct } from '../../redux/asyncActions/product/putProduct.js'

import swal from 'sweetalert'
import { cleanEditStatus } from '../../redux/features/product/productSlice.js'

export default function ManageProducts({ renderControl, setRenderControl }) {
    const shelterId = useSelector((state) => state.user.userInfo.shelter)
    const products = useSelector((state) => state.product.products)
    const { statusEdit } = useSelector((state) => state.product)
    console.log(products)
    const productsShelter = products.filter(
        (prod) => prod.shelter._id === shelterId
    )
    const dispatch = useDispatch()
    console.log(productsShelter)

    useEffect(() => {
        dispatch(getAllProducts())
        if (statusEdit === 'success') {
            swal({
                title: 'Your Product has been Deleted!',
                icon: 'success',
                button: 'Ok!',
            })
            dispatch(cleanEditStatus())
        }
    }, [statusEdit])

    const rows = productsShelter?.map((prod, index) => ({
        _id: prod._id,
        id: index + 1,
        img: prod.img,
        description: prod.description,
        shelter: prod.shelter,
        name: prod.name,
        price: prod.price,
        stock: prod.stock,
        status: prod.status,
    }))

    const handleDelete = (e, params) => {
        params.row.status = 'Deleted'
        const _id = params.row._id
        const { id, ...values } = params.row

        dispatch(putProduct({ _id, values }))
    }
    const handleEdit = (e, params) => {
        setRenderControl({
            ...renderControl,
            shelterEditProductInfo: productsShelter[params.id - 1],
            shelterProducts: false,
            shelterEditProduct: true,
        })
    }

    const columns = [
        { field: 'id', headerName: 'ID' },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Price',
            // width: 150,
            editable: true,
        },
        {
            field: 'stock',
            headerName: 'Stock',
            // width: 110,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            // width: 110,
            editable: true,
        },

        {
            field: 'deleteAction',
            headerName: 'Delete',
            // width: 100,
            align: 'center',
            sortable: false,
            renderCell: (params) =>
                productsShelter?.id !== params.row.id ? (
                    <Button
                        variant="contained"
                        color="error"
                        onClick={(e) => handleDelete(e, params)}
                        // size="small"
                        // style={{ width: '15px' }}
                    >
                        Delete
                    </Button>
                ) : null,
        },
        {
            field: 'editAction',
            headerName: 'Edit',
            // width: 100,
            align: 'center',
            sortable: false,
            renderCell: (params) =>
                productsShelter?.id !== params.row.id ? (
                    <Button
                        variant="contained"
                        color="success"
                        onClick={(e) => handleEdit(e, params)}
                        // size="small"
                        // style={{ width: '15px' }}
                    >
                        Edit
                    </Button>
                ) : null,
        },
    ]

    useEffect(() => {
        if (products.length === 0) {
            dispatch(getAllProducts())
        }
    }, [])

    return (
        <>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                autoHeight={true}
            />
        </>
    )
}
