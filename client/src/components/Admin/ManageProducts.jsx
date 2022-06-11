
import  {DataGrid } from '@mui/x-data-grid';
import {Grid, Button} from '@mui/material';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getAllProducts } from '../../redux/asyncActions/product/getAllProducts.js';
  






export default function ManageProducts() {
const shelterId = useSelector(state=>state.user.userInfo.shelter);
const products= useSelector(state=>state.product.products);
const productsShelter = products.filter(prod=>prod.shelter._id===shelterId);
const dispatch = useDispatch();
console.log(productsShelter)

const rows = productsShelter?.map((prod,index) => ({
  id: index+1,
  name: prod.name,
  price: prod.price,
  stock: prod.stock,
  status: prod.status,
  action: ''
  
}));

const handleDelete =(e,params)=>{
  const { id } = params.row;
  const prodToDelete = productsShelter[id-1];
  console.log(prodToDelete);
};
const handleEdit =(e,params)=>{
  console.log(params);
};

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
  {
    field: "deleteAction",
    headerName: "Delete",
    width: 100,
    align: "center",
    sortable: false,
    renderCell: (params) =>
    productsShelter?.id !== params.row.id ? (
        <Button
          variant="contained"
          color="error"
          onClick={(e) => handleDelete(e, params)}
          size="small"
          style={{width:'15px'}}
        >
          Delete
        </Button>
      ) : null,
   },
   {
    field: "editAction",
    headerName: "Edit",
    width: 100,
    align: "center",
    sortable: false,
    renderCell: (params) =>
    productsShelter?.id !== params.row.id ? (
        <Button
          variant="contained"
          color="success"
          onClick={(e) => handleEdit(e, params)}
          size="small"
          style={{width:'15px'}}

        >
          Edit
        </Button>
      ) : null,
   },
  
];

useEffect(() => {
  dispatch(getAllProducts())
  
}, [])


  return (
    <>
    
        <Grid item xs={0.2}>
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
