import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Grid } from '@mui/material'
import { Sidebar } from '../../src/components/Admin/Sidebar.jsx'
import { getAllProducts } from '../redux/asyncActions/product/getAllProducts.js'
import ManagePets from '../components/Admin/ManagePets.jsx'
import ManageProducts from '../components/Admin/ManageProducts.jsx'
import { ProductForm } from '../components/Products/ProductForm.jsx'
import PetCreationForm from '../components/PetAdoption/PetCreationForm.jsx'
import EditPetAdoption from '../components/PetAdoption/EditPetAdoption.jsx'
import { ProductEditForm } from '../components/Products/ProductEditForm.jsx'

export default function AdminShelter() {
    const dispatch = useDispatch()
    const [renderControl, setRenderControl] = useState({
        shelterPets: true,
        shelterProducts: false,
        shelterNewPet: false,
        shelterNewProduct: false,
        shelterEditPet: false,
        shelterEditProduct: false,
        shelterEditPetInfo: {},
        shelterEditProductInfo: {},
    })

    useEffect(() => {
        dispatch(getAllProducts)
    }, [])

    return (
        <>
            <Grid container my={4} gap={2}>
                <Grid item xs={3}>
                    <Sidebar
                        setRenderControl={setRenderControl}
                        renderControl={renderControl}
                    />
                </Grid>

                <Grid item xs={8}>
                    {renderControl.shelterPets && (
                        <ManagePets
                            setRenderControl={setRenderControl}
                            renderControl={renderControl}
                        />
                    )}

                    {renderControl.shelterProducts && (
                        <ManageProducts
                            setRenderControl={setRenderControl}
                            renderControl={renderControl}
                        />
                    )}

                    {renderControl.shelterNewProduct && <ProductForm />}
                    {renderControl.shelterNewPet && <PetCreationForm />}

                    {renderControl.shelterEditPet && (
                        <EditPetAdoption
                            setRenderControl={setRenderControl}
                            renderControl={renderControl}
                        />
                    )}

                    {renderControl.shelterEditProduct && (
                        <ProductEditForm
                            setRenderControl={setRenderControl}
                            renderControl={renderControl}
                        />
                    )}
                </Grid>
            </Grid>
        </>
    )
}
