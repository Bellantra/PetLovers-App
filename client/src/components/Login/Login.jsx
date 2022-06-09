import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import swal from 'sweetalert'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
    Button,
    Divider,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    TextField,
    Typography,
} from '@mui/material'
import { Box, Container } from '@mui/system'
import { postAuthLoginPassword } from '../../redux/features/login/loginSlice'
import { useEffect } from 'react'
import { getUserInfo } from '../../redux/asyncActions/user/getUserInfo'
import { useNavigate } from 'react-router-dom'

const initialValues = {
    email: '',
    password: '',
    showPassword: false,
}

const validate = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .required('Please enter your password')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        ),
})

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLogged } = useSelector((state) => state.login)

    useEffect(() => {
        if (isLogged) {
            // swal(
            //     'Se ha registrado satisfactoriamente!',
            //     'Presione para continuar',
            //     'success'
            // )
            navigate(-1)
            dispatch(getUserInfo())
        }
    }, [isLogged])

    const formik = useFormik({
        initialValues: { initialValues },
        validationSchema: validate,
        onSubmit: (values, { resetForm }) => {
            dispatch(postAuthLoginPassword(values))
        },
    })

    return (
        <Container sx={{ marginY: 10 }} maxWidth="sm">
            <Paper elevation={3} align={'center'}>
                <Box
                    component={'form'}
                    onSubmit={formik.handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        sx={{ marginTop: 5 }}
                        align="center"
                        variant="h4"
                        gutterBottom
                    >
                        Sign In
                    </Typography>
                    <TextField
                        sx={{ m: 1, width: '17rem' }}
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        label="Email"
                        type="text"
                        variant="outlined"
                        placeholder="Ej:myname@gmail.com"
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                    />
                    {formik.touched.email && formik.errors.email && (
                        <font align={'center'} color={'red'} fontSize={'small'}>
                            <h6>{formik.errors.email} </h6>
                        </font>
                    )}
                    <FormControl sx={{ m: 2, width: '17rem' }}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            label="Password"
                            placeholder="Password123!"
                            type={
                                formik.values.showPassword ? 'text' : 'password'
                            }
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.password &&
                                Boolean(formik.errors.password)
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={(e) =>
                                            formik.setFieldValue(
                                                'showPassword',
                                                !formik.values.showPassword
                                            )
                                        }
                                        onMouseDown={(e) => e.preventDefault()}
                                        edge="end"
                                    >
                                        {formik.values.showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {formik.touched.password && formik.errors.password && (
                        <font align={'center'} color={'red'} fontSize={'small'}>
                            <h6>{formik.errors.password} </h6>
                        </font>
                    )}

                    <Button
                        sx={{
                            marginTop: 5,
                            width: '17rem',
                            height: '3rem',
                            marginBottom: 5,
                        }}
                        type="submit"
                        variant="contained"
                    >
                        Sign In
                    </Button>
                </Box>
                <Divider variant="middle" />

                <Button
                    sx={{
                        marginTop: 5,
                        marginBottom: 5,
                        width: '17rem',
                        height: '3rem',
                    }}
                    type="submit"
                    variant="contained"
                    color="warning"
                >
                    Login with Google
                </Button>
            </Paper>
        </Container>
    )
}

export default Login
