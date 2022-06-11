import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Grid } from '@mui/material';
import { Sidebar } from '../../src/components/Admin/Sidebar.jsx';
import { getAllProducts } from '../redux/asyncActions/product/getAllProducts.js';
import ManagePets from '../components/Admin/ManagePets.jsx';
import ManageProducts from '../components/Admin/ManageProducts.jsx';

export default function AdminShelter() {
    const dispatch = useDispatch();
  const [renderControl, setRenderControl] = useState({
    shelterPets: false,
    shelterProducts: false,
    shelterReviews: false,
    shelterAccount: false
    
  });

  useEffect(()=>{
    dispatch(getAllProducts);
  },[])
  

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
