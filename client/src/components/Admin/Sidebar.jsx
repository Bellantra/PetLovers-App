import { Grid, Box, Typography, Hidden } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import DeleteIcon from '@mui/icons-material/Delete'
import PetsIcon from '@mui/icons-material/Pets'
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined'

export const Sidebar = ({ setRenderControl, renderControl }) => {
    // const user = useSelector((state) => state.user.User);

    return (
        <>
            <Grid
                container
                style={{
                    border: 'solid 1px lightgrey',
                    borderRadius: '8px',
                }}
                padding={1}
                justifyContent={'space-around'}
            >
                <Grid
                    item
                    md={12}
                    padding={1}
                    style={{
                        cursor: 'pointer',
                        alignItems: 'center',
                        borderRadius: '8px',
                    }}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'lightblue',
                        },
                    }}
                    onClick={() => {
                        setRenderControl({
                            shelterPets: true,
                            shelterProducts: false,
                            shelterNewPet: false,
                            shelterNewProduct: false,
                        })
                    }}
                >
                    <Grid container gap={1}>
                        <Grid item>
                            <PetsIcon color="primary" />
                        </Grid>
                        <Grid item>
                            <Typography
                                style={{
                                    fontWeight: 'lighter',
                                    borderRadius: '8px',
                                }}
                            >
                                Pets
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    item
                    md={12}
                    padding={1}
                    style={{
                        cursor: 'pointer',
                        alignItems: 'center',
                        borderRadius: '8px',
                    }}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'lightblue',
                        },
                    }}
                    onClick={() =>
                        setRenderControl({
                            shelterPets: false,
                            shelterProducts: true,
                            shelterNewPet: false,
                            shelterNewProduct: false,
                        })
                    }
                >
                    <Grid container gap={1}>
                        <Grid item>
                            <InventoryOutlinedIcon color="primary" />
                        </Grid>
                        <Grid item>
                            <Typography>Products</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    item
                    md={12}
                    padding={1}
                    style={{
                        cursor: 'pointer',
                        alignItems: 'center',
                        borderRadius: '8px',
                    }}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'lightblue',
                        },
                    }}
                    onClick={() =>
                        setRenderControl({
                            shelterPets: false,
                            shelterProducts: false,
                            shelterNewPet: false,
                            shelterNewProduct: true,
                        })
                    }
                >
                    <Grid container gap={1}>
                        <Grid item>
                            <BookmarkAddIcon color="primary" />
                        </Grid>
                        <Grid item>
                            <Typography>New Product</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    item
                    md={12}
                    padding={1}
                    style={{
                        cursor: 'pointer',

                        alignItems: 'center',

                        borderRadius: '8px',
                    }}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'lightblue',
                        },
                    }}
                    onClick={() =>
                        setRenderControl({
                            shelterPets: false,
                            shelterProducts: false,
                            shelterNewPet: true,
                            shelterNewProduct: false,
                        })
                    }
                >
                    <Grid container gap={1}>
                        <Grid item>
                            <DeleteIcon color="primary" />
                        </Grid>
                        <Grid item>
                            <Typography>New Adoption</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Sidebar
