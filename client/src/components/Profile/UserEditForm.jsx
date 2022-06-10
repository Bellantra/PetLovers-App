import {
    Avatar,
    Button,
    CircularProgress,
    Paper,
    TextField,
} from '@mui/material'
import Typography from '@mui/material/node/Typography'
import { Box, Container } from '@mui/system'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as Yup from 'yup'

import { putEditUser } from '../../redux/asyncActions/user/putEditUser'
import handleUploadPictures from '../../utils/handleUploadPictures'

const { VITE_APP_PRESET_USER } = import.meta.env

const validate = Yup.object({
    nickname: Yup.string(),
    fullName: Yup.string(),
    img: Yup.string(),
})
const UserEditForm = ({ handleClose }) => {
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.user)
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState([userInfo?.img])
    // console.log(userInfo)

    // console.log(image)
    // if (image.length > 0) {
    //     image = image.pop()
    // }

    const preset = VITE_APP_PRESET_USER

    const initialValues = {
        nickname: userInfo?.nickname,
        fullName: userInfo?.fullName,
        img: userInfo?.img,
    }

    const onSubmit = (values) => {
        const newData = {
            ...values,
            nickname: values.nickname,
            fullName: values.fullName,
            img: image[image.length - 1],
        }
        console.log(newData, 'lo q mando a cambiar del form')
        dispatch(putEditUser({ id: userInfo.id, newData }))
        handleClose()
    }
    const formik = useFormik({
        initialValues,
        validationSchema: validate,
        onSubmit,
    })
    return (
        <Container sx={{ marginBottom: 10 }} maxWidth="md">
            <Paper elevation={3}>
                <Box marginY={5}>
                    <Box textAlign={'center'}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                            }}
                        >
                            <Button
                                sx={{
                                    height: '2rem',
                                    width: '2rem',
                                    margin: 4,
                                    alignSelf: 'flex-end',
                                }}
                                variant="contained"
                                onClick={handleClose}
                            >
                                X
                            </Button>
                            <Typography
                                sx={{ marginTop: 2 }}
                                align="center"
                                variant="h4"
                                gutterBottom
                            >
                                Edit your profile
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        component={'form'}
                        onSubmit={formik.handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                            '& .MuiTextField-root': { m: 2, width: '35rem' },
                        }}
                    >
                        <TextField
                            placeholder="Enter your username"
                            name="nickname"
                            id="nickname"
                            label="Username"
                            type="text"
                            value={formik.values.nickname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={Boolean(
                                formik.touched.nickname &&
                                    formik.errors.nickname
                            )}
                            helperText={
                                formik.touched.nickname &&
                                formik.errors.nickname
                            }
                        ></TextField>

                        <TextField
                            placeholder="Enter your Name and Lastname"
                            name="fullName"
                            id="fullName"
                            label="Fullname"
                            type="text"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={Boolean(
                                formik.touched.fullName &&
                                    formik.errors.fullName
                            )}
                            helperText={
                                formik.touched.fullName &&
                                formik.errors.fullName
                            }
                        ></TextField>
                        {loading ? (
                            <CircularProgress />
                        ) : (
                            <Avatar
                                src={image[image.length - 1]}
                                sx={{ width: 100, height: 100 }}
                            ></Avatar>
                        )}

                        <TextField
                            type="file"
                            id="img"
                            name="img"
                            placeholder="Upload an image"
                            helperText="Please upload a new picture"
                            onChange={(e) =>
                                handleUploadPictures(
                                    e,
                                    setLoading,
                                    setImage,
                                    preset
                                )
                            }
                        ></TextField>

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
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}

export default UserEditForm
