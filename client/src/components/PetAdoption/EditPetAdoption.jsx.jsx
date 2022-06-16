import { useFormik } from 'formik'
import * as yup from 'yup'
import {
    TextField,
    Button,
    Grid,
    CircularProgress,
    IconButton,
    Paper,
    MenuItem,
    Checkbox,
    FormControlLabel,
} from '@mui/material'
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone'
import handleUploadPictures from '../../utils/handleUploadPictures'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box } from '@mui/system'
import Typography from '@mui/material/node/Typography'
import { editPetAdoption } from '../../redux/asyncActions/pet/editPetAdopcion'

import swal from 'sweetalert'
import { cleanStatusCreate } from '../../redux/features/adopt/adoptSlice'

const preset = import.meta.env.VITE_APP_PRESET_ADOPT_PETS

const races = [
    { value: 'Dog', label: 'Dog' },
    { value: 'Cat', label: 'Cat' },
]
const genres = [
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' },
]

const colors = [
    {
        value: 'black',
        label: 'black',
    },
    {
        value: 'white',
        label: 'white',
    },
    {
        value: 'gray',
        label: 'gray',
    },
    {
        value: 'brown',
        label: 'brown',
    },
    {
        value: 'tricolor',
        label: 'tricolor',
    },
    {
        value: 'yellow',
        label: 'yellow',
    },
    {
        value: 'beige',
        label: 'beige',
    },
    {
        value: 'others',
        label: 'others',
    },
]

const validationSchema = yup.object({
    nickname: yup.string().required('Pet name is required'),
    age: yup
        .number()
        .typeError('you must specify a number')
        .min(1, 'Min value 1.'),
    city: yup.string().required('City name is required'),
    // race: yup.string().required('Race is required'),
    // genre: yup.string(),
    color: yup.string().max(20, 'Max 20chars'),
    description: yup
        .string()
        .min(50, 'Min 50 characters')
        .max(900, 'Max 900 characters')
        .required('Description is required'),
})

const EditPetAdoption = ({ renderControl, setRenderControl }) => {
    const {
        _id,
        age,
        city,
        description,
        nickname,
        race,
        genre,
        vaccinated,
        color,
    } = renderControl.shelterEditPetInfo

    const images = renderControl.shelterEditPetInfo.image

    const [race2, setRace2] = useState(race)
    const [genre2, setGenre2] = useState(genre)
    const [color2, setColor2] = useState(color)

    const handleRaceChange = (event) => {
        setRace2(event.target.value)
    }
    const handleGenreChange = (event) => {
        setGenre2(event.target.value)
    }

    const handleColorChange = (event) => {
        setColor2(event.target.value)
    }

    const [checked, setChecked] = useState(vaccinated)

    const handleVaccinateChange = (event) => {
        setChecked(event.target.checked)
    }
    const { userInfo } = useSelector((state) => state.user)
    const { statusCreate } = useSelector((state) => state.adopt)

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(images)
    const dispatch = useDispatch()

    const handleDeleteImg = (elem) => {
        setImage((prevState) => prevState.filter((img) => img !== elem))
    }

    useEffect(() => {
        if (statusCreate === 'success') {
            swal({
                title: 'You Pet has been Edited!',
                icon: 'success',
                button: 'Ok!',
            })

            setRenderControl({
                ...renderControl,
                shelterPets: true,
                shelterEditPet: false,
            })
        }
        dispatch(cleanStatusCreate())
    }, [statusCreate])

    const onSubmit = (values) => {
        values.image = image
        values.genre = genre2
        values.race = race2
        values.color = color2
        values.vaccinated = checked
        values.shelter = userInfo.shelter
        dispatch(editPetAdoption({ _id, values }))
    }

    const formik = useFormik({
        initialValues: {
            nickname,
            age,
            city,
            image,
            genre: genre2,
            race: race2,
            description,
            color: color2,
        },
        // validationSchema,

        onSubmit,
    })

    return (
        <>
            <Grid container>
                <Grid
                    item
                    component={'form'}
                    onSubmit={formik.handleSubmit}
                    xs={12}
                    md={9}
                    lg={9}
                    margin="auto"
                    style={{
                        border: 'solid 1px lightgrey',
                        borderRadius: '8px',
                        padding: '20px',
                        marginBottom: '30px',
                    }}
                >
                    <Box textAlign={'center'} marginTop={2} marginBottom={5}>
                        <Typography variant="h5">Edit you Pet</Typography>
                    </Box>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="nickname"
                                name="nickname"
                                label="Pet name"
                                value={formik.values.nickname}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.nickname &&
                                    Boolean(formik.errors.nickname)
                                }
                                helperText={
                                    formik.touched.nickname &&
                                    formik.errors.nickname
                                }
                                style={{ marginBottom: '20px' }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="age"
                                name="age"
                                label="Age"
                                type="number"
                                min="1"
                                step="1"
                                value={formik.values.age}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.age &&
                                    Boolean(formik.errors.age)
                                }
                                helperText={
                                    formik.touched.age && formik.errors.age
                                }
                                style={{ marginBottom: '20px' }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="city"
                                name="city"
                                label="City"
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.city &&
                                    Boolean(formik.errors.city)
                                }
                                helperText={
                                    formik.touched.city && formik.errors.city
                                }
                                style={{ marginBottom: '20px' }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="race"
                                name="race"
                                select
                                fullWidth
                                label="Race"
                                value={race}
                                onChange={handleRaceChange}
                                helperText="Please select the race"
                                style={{ marginBottom: '20px' }}
                            >
                                {races.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="genre"
                                name="genre"
                                select
                                fullWidth
                                label="Genre"
                                value={genre}
                                onChange={handleGenreChange}
                                helperText="Please select the gender"
                                style={{ marginBottom: '20px' }}
                            >
                                {genres.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                select
                                fullWidth
                                id="color"
                                name="color"
                                label="Color"
                                value={color}
                                onChange={handleColorChange}
                                helperText="Please select the gender"
                            >
                                {colors.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>

                    <Box style={{ marginBottom: '1rem' }}>
                        {image?.length ? (
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
                            fullWidth
                            type="file"
                            id="img"
                            name="img"
                            helperText="Upload Pet images"
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
                        id="description"
                        name="description"
                        label="Describe the pet"
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
                    <Box textAlign={'center'} marginTop={2} marginBottom={5}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    id="vaccinated"
                                    name="vaccinated"
                                    color="secondary"
                                    size="medium"
                                    checked={checked}
                                    onChange={handleVaccinateChange}
                                    inputProps={{
                                        'aria-label': 'controlled',
                                    }}
                                />
                            }
                            label="Vaccinated"
                        />
                    </Box>

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
        </>
    )
}

export default EditPetAdoption
