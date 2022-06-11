import * as React from 'react';
import  {DataGrid } from '@mui/x-data-grid';
import {Grid} from '@mui/material';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'nickname',
    headerName: 'Nickname',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 150,
    editable: true,
  },
  {
    field: 'race',
    headerName: 'Race',
    width: 110,
    editable: true,
    
  },
  {
    field: 'city',
    headerName: 'City',
    width: 110,
    editable: true,
  },
  {
    field: 'genre',
    headerName: 'Genre',
    width: 110,
    editable: true,
  },
  {
    field: 'vaccinated',
    headerName: 'Vaccinated',
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
const shelters = useSelector(state=>state.shelter.shelters);
const shelter= shelters.find(shelter=>shelter._id===shelterId);
const petsAdoption = shelter.petsAdoption;

console.log(petsAdoption)

const rows = petsAdoption?.map((pet,index) => ({
  id: index+1,
  nickname: pet.nickname,
  age: pet.age,
  race: pet.race,
  city: pet.city,
  genre: pet.genre,
  vaccinated: pet.vaccinated,
  status: pet.status,
  action:''
  
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
