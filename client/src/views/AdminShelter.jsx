import React, { useState} from 'react';
import { Grid } from '@mui/material';
import { Sidebar } from '../../src/components/Admin/Sidebar.jsx';
import ManagePets from '../components/Admin/ManagePets.jsx';
import ManageProducts from '../components/Admin/ManageProducts.jsx';

export default function AdminShelter() {
   
  const [renderControl, setRenderControl] = useState({
    shelterPets: false,
    shelterProducts: false,
    shelterReviews: false,
    shelterAccount: false
    
  });

 
  return (
    <>
      <Grid container my={4}>
        <Sidebar
          setRenderControl={setRenderControl}
          renderControl={renderControl}
        />
        
        {renderControl.shelterPets && <ManagePets />}
        {renderControl.shelterProducts && <ManageProducts />}
        {renderControl.shelterReviews && <ManagePets />}
      </Grid>
    </>
  );
}
