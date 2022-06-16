import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAdoptablePets } from '../../redux/asyncActions/pet/getAdoptablePets'

import swal from 'sweetalert'
import { editPetAdoption } from '../../redux/asyncActions/pet/editPetAdopcion'
import { cleanStatusCreate } from '../../redux/features/adopt/adoptSlice'

export default function ManagePets({ renderControl, setRenderControl }) {
    const { userInfo } = useSelector((state) => state.user)
    const { adoptPets } = useSelector((state) => state.adopt)
    const { statusCreate } = useSelector((state) => state.adopt)

    const dispatch = useDispatch()

    const petsAdoption = adoptPets?.filter(
        (pets) => pets.shelter?._id === userInfo.shelter
    )

    console.log(petsAdoption)

    useEffect(() => {
        dispatch(getAdoptablePets())
        if (statusCreate === 'success') {
            swal({
                title: 'Your Pet has been Deleted!',
                icon: 'success',
                button: 'Ok!',
            })
            dispatch(cleanStatusCreate())
        }
    }, [statusCreate])

    const rows = petsAdoption?.map((pet, index) => ({
        _id: pet._id,
        id: index + 1,
        nickname: pet.nickname,
        description: pet.description,
        image: pet.image,
        age: pet.age,
        race: pet.race,
        city: pet.city,
        genre: pet.genre,
        vaccinated: pet.vaccinated,
        status: pet.status,
        color: pet.color,
    }))

    const handleDelete = (e, params) => {
        params.row.status = 'Deleted'
        const _id = params.row._id
        const { id, ...values } = params.row

        // console.log(_id)
        // console.log(values)

        dispatch(editPetAdoption({ _id, values }))
    }
    const handleEdit = (e, params) => {
        // console.log(params)
        // console.log(petsAdoption[params.id - 1])

        setRenderControl({
            ...renderControl,
            shelterEditPetInfo: petsAdoption[params.id - 1],
            shelterPets: false,
            shelterEditPet: true,
        })
    }

    const columns = [
        { field: 'id', headerName: 'ID' },
        {
            field: 'nickname',
            headerName: 'Nickname',
            // width: 100,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            // width: 150,
            editable: true,
        },

        {
            field: 'race',
            headerName: 'Race',
            // width: 110,
            editable: true,
        },
        {
            field: 'city',
            headerName: 'City',
            // width: 110,
            editable: true,
        },
        {
            field: 'genre',
            headerName: 'Genre',
            // width: 110,
            editable: true,
        },
        {
            field: 'vaccinated',
            headerName: 'Vaccinated',
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
                petsAdoption?.id !== params.row.id ? (
                    <Button
                        variant="contained"
                        color="error"
                        onClick={(e) => handleDelete(e, params)}
                        size="small"
                        style={{ width: '15px' }}
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
                petsAdoption?.id !== params.row.id ? (
                    <Button
                        variant="contained"
                        color="success"
                        onClick={(e) => handleEdit(e, params)}
                        size="small"
                        // style={{ width: '15px' }}
                    >
                        Edit
                    </Button>
                ) : null,
        },
    ]

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
