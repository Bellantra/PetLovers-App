import { useFormik } from 'formik'
import * as yup from 'yup'
import { TextField, Button, Grid, Avatar, Switch } from '@mui/material'

const validationSchema = yup.object({
    name: yup.string('Enter the product Name').required('Name is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
})

export const ProductForm = () => {
    const formik = useFormik({
        initialValues: {
            name: 'Name',
            img: 'foobar',
            description: 'This Product .....',
            stock: '',
            price: '',
            shelter: '',
            status: false,
        },
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container style={{ marginTop: '30px' }}>
                    <Grid item xs={4}></Grid>

                    <Grid
                        item
                        xs={4}
                        style={{
                            border: 'solid 1px lightgrey',
                            borderRadius: '8px',
                            padding: '20px',
                            marginBottom: '30px',
                        }}
                    >
                        <Grid container>
                            <Grid item xs={4}></Grid>
                            <Grid item xs={2}>
                                <Avatar
                                    src={formik.values.img}
                                    sx={{
                                        height: 100,
                                        mb: 2,
                                        width: 100,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth
                            id="img"
                            name="img"
                            label="Img Path"
                            value={formik.values.img}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.img && Boolean(formik.errors.img)
                            }
                            helperText={formik.touched.img && formik.errors.img}
                            style={{ marginBottom: '20px' }}
                        />
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Name"
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
                        <Grid container>
                            <Grid item xs={5}>
                                <TextField
                                    fullWidth
                                    id="shelter"
                                    name="shelter"
                                    label="Shelter"
                                    value={formik.values.shelter}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.shelter &&
                                        Boolean(formik.errors.shelter)
                                    }
                                    helperText={
                                        formik.touched.shelter &&
                                        formik.errors.shelter
                                    }
                                    style={{ marginBottom: '20px' }}
                                />
                            </Grid>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={5}>
                                <Switch
                                    id="status"
                                    name="status"
                                    checked={formik.values.status}
                                    onChange={formik.handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    size="medium"
                                />
                                Status
                            </Grid>
                            <TextField
                                fullWidth
                                id="img"
                                name="img"
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
                        </Grid>
                        <Button
                            color="primary"
                            variant="contained"
                            fullWidth
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
