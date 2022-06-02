import * as React from 'react'
import {getAdoptablePets} from '../redux/asyncActions/pet/getAdoptablePets'
import { useDispatch } from 'react-redux'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Button } from '@mui/material'



const Filtros = () => {
    const [filter, setFilter] = React.useState('')
    const dispatch = useDispatch()

    const handleChangeFilter = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value })
    }

    const handleOnFilter = () => {
        dispatch(getAdoptablePets(filter))
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
                marginBottom: '20px',
            }}
        >
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-standard-label">
                    race
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    onChange={handleChangeFilter}
                    label="Race"
                    name={'race'}
                    value={filter.race ? filter.race : ''}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Dog'}>Dog</MenuItem>
                    <MenuItem value={'Cat'}>Cat</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-standard-label-color">
                    color
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label-color"
                    id="demo-simple-select-standard-color"
                    onChange={handleChangeFilter}
                    label="Color"
                    name={'color'}
                    value={filter.color ? filter.color : ''}
                >
                    <MenuItem value={''}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'black'}>black</MenuItem>
                    <MenuItem value={'white'}>white</MenuItem>
                    <MenuItem value={'gray'}>gray</MenuItem>
                    <MenuItem value={'brown'}>brown</MenuItem>
                    <MenuItem value={'tricolor'}>tricolor</MenuItem>
                    <MenuItem value={'others'}>others</MenuItem>
                </Select>
            </FormControl>
            <Button
                variant="contained"
                onClick={() => {
                    handleOnFilter()
                }}
            >
                Filter
            </Button>
        </div>
    )
}

export default Filtros
