import * as React from 'react';
import  {DataGrid } from '@mui/x-data-grid';
import {Grid} from '@mui/material';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';



const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    editable: true,
  },
  {
    field: 'stock',
    headerName: 'Stock',
    width: 110,
    editable: true,
    
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 110,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 110,
    editable: true,
  },
  
];



export default function DataGridC() {
const shelterId = useSelector(state=>state.user.userInfo.shelter);
const products= useSelector(state=>state.product.products);
const productsShelter = products.filter(prod=>prod.shelter._id===shelterId);

console.log(productsShelter)

const rows = productsShelter?.map((prod,index) => ({
  id: index+1,
  name: prod.name,
  price: prod.price,
  stock: prod.stock,
  status: prod.status,
  action: ''
  
}));

  return (
    <>
    
        <Grid item xs={0.5}>
    </Grid>
    <Grid item xs={8}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
        
      />
    </Grid>

    </>
  );
}
