import { useFormik } from 'formik'
import * as yup from 'yup'
import {
    TextField,
    Button,
    Grid,
    CircularProgress,
    IconButton,
    Paper,
} from '@mui/material'
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone'
import handleUploadPictures from '../../utils/handleUploadPictures'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box } from '@mui/system'
import Typography from '@mui/material/node/Typography'

// import Swal from 'sweetalert2'

import { postCreateProducts } from '../../redux/asyncActions/product/postCreateProduct'

const preset = import.meta.env.VITE_APP_PRESET_PRODUCTS

const validationSchema = yup.object({
    name: yup.string().required('Product name is required'),
    stock: yup
        .number()
        .typeError('you must specify a number')
        .min(1, 'Min value 1.')
        .required('Stock is required'),
    price: yup
        .number()
        .typeError('you must specify a number')
        .min(1, 'Min value 1.')
        .required('Price is required'),

    description: yup
        .string()
        .min(15, 'Min 50 characters')
        .max(200, 'Max 900 characters')
        .required('Description is required'),
})

export const ProductForm = () => {
    const { userInfo } = useSelector((state) => state.user)

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState([])
    const dispatch = useDispatch()

    const handleDeleteImg = (elem) => {
        setImage((prevState) => prevState.filter((img) => img !== elem))
    }

    const onSubmit = (values) => {
        values.img = image
        values.shelter = userInfo.shelter
        dispatch(postCreateProducts(values))
        setImage([])
        formik.resetForm()
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            stock: '',
            price: '',
        },
        validationSchema,
        onSubmit,
    })

    return (
        <>
            <Grid item xs={0.2}></Grid>
            <Grid item xs={6}>
                <Grid container>
                    <Grid
                        item
                        component={'form'}
                        onSubmit={formik.handleSubmit}
                        xs={12}
                        md={6}
                        lg={6}
                        margin="auto"
                        style={{
                            border: 'solid 1px lightgrey',
                            borderRadius: '8px',
                            padding: '20px',
                            marginBottom: '30px',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h5" marginBottom={2}>
                            Create a Product
                        </Typography>
                        <Box style={{ marginBottom: '1rem' }}>
                            {image.length ? (
                                <Paper
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap',
                                        gap: 1,
                                        p: 3,
                                    }}
                                    variant="outlined"
                                >
                                    {image?.map((elem, idx) => (
                                        <div key={idx}>
                                            <IconButton
                                                style={{
                                                    position: 'absolute',
                                                    margin: 1,
                                                    borderRadius: 10,
                                                }}
                                                onClick={() =>
                                                    handleDeleteImg(elem)
                                                }
                                            >
                                                <HighlightOffTwoToneIcon color="primary" />
                                            </IconButton>
                                            <img
                                                src={elem}
                                                alt="Not found"
                                                style={{
                                                    width: '7rem',
                                                    height: '7rem',
                                                    borderRadius: 4,
                                                }}
                                            />
                                        </div>
                                    ))}
                                </Paper>
                            ) : null}
                            {loading && <CircularProgress />}
                            <TextField
                                required
                                fullWidth
                                type="file"
                                id="img"
                                name="img"
                                helperText="Upload products images"
                                onChange={(e) =>
                                    handleUploadPictures(
                                        e,
                                        setLoading,
                                        setImage,
                                        preset
                                    )
                                }
                            />
                        </Box>

                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Product Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.name &&
                                Boolean(formik.errors.name)
                            }
                            helperText={
                                formik.touched.name && formik.errors.name
                            }
                            style={{ marginBottom: '20px' }}
                        />
                        <Grid container>
                            <Grid item xs={5}>
                                <TextField
                                    fullWidth
                                    id="price"
                                    name="price"
                                    label="Price"
                                    type="number"
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.price &&
                                        Boolean(formik.errors.price)
                                    }
                                    helperText={
                                        formik.touched.price &&
                                        formik.errors.price
                                    }
                                    style={{ marginBottom: '20px' }}
                                />
                            </Grid>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={5}>
                                <TextField
                                    fullWidth
                                    id="stock"
                                    name="stock"
                                    label="Stock"
                                    type="number"
                                    min="1"
                                    step="1"
                                    value={formik.values.stock}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.stock &&
                                        Boolean(formik.errors.stock)
                                    }
                                    helperText={
                                        formik.touched.stock &&
                                        formik.errors.stock
                                    }
                                    style={{ marginBottom: '20px' }}
                                />
                            </Grid>
                        </Grid>

                        <TextField
                            fullWidth
                            id="description"
                            name="description"
                            label="Description"
                            multiline
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.description &&
                                Boolean(formik.errors.description)
                            }
                            helperText={
                                formik.touched.description &&
                                formik.errors.description
                            }
                            style={{ marginBottom: '20px' }}
                        />

                        <Button
                            fullWidth
                            color="primary"
                            variant="contained"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
