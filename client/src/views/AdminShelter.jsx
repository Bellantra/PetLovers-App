import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Grid } from '@mui/material';
import { Sidebar } from '../../src/components/Admin/Sidebar.jsx';
// import { PersonalInformation } from '../components/Account/PersonalInformation';
import Tabla from '../../src/components/Admin/Tabla.jsx';
import { getAllProducts } from '../redux/asyncActions/product/getAllProducts.js';
// import { Booking } from '../components/Account/Booking';
// import { Security } from '../components/Account/Security';

export default function AdminShelter() {
    const dispatch = useDispatch();
  const [renderControl, setRenderControl] = useState({
    shelterPets: false,
    shelterProducts: false,
    shelterReviews: false,
    shelterAccount: false
    
  });

  const prod = useSelector((state) => state.product.products);
  const user = useSelector((state) => state.user);
  console.log(prod);

  const thProd= ['img', 'name', 'price', 'stock', 'estatus']
useEffect(()=>{
    dispatch(getAllProducts());
    

},[]);

  return (
    <>
      <Grid container my={4}>
        <Sidebar
          setRenderControl={setRenderControl}
          renderControl={renderControl}
        />
        
        {renderControl.shelterPets && <Tabla  />}
        {renderControl.shelterProducts && <Tabla />}
        {renderControl.shelterReviews && <Tabla />}
      </Grid>
    </>
  );
}
