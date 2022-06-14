import { DataGrid } from '@mui/x-data-grid'
import { Grid, Button } from '@mui/material'
import { useSelector } from 'react-redux'

export default function ManagePets({ renderControl, setRenderControl }) {
    const shelterId = useSelector((state) => state.user.userInfo.shelter)
    const shelters = useSelector((state) => state.shelter.shelters)
    const shelter = shelters.find((shelter) => shelter._id === shelterId)
    const petsAdoption = shelter.petsAdoption

    console.log(petsAdoption)

    const rows = petsAdoption?.map((pet, index) => ({
        id: index + 1,
        nickname: pet.nickname,
        age: pet.age,
        race: pet.race,
        city: pet.city,
        genre: pet.genre,
        vaccinated: pet.vaccinated,
        status: pet.status,
        action: '',
    }))

    const handleDelete = (e, params) => {
        console.log(params)
        console.log(e)
    }
    const handleEdit = (e, params) => {
        console.log(params)
        console.log(petsAdoption[params.id - 1])

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
                        // size="small"
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
