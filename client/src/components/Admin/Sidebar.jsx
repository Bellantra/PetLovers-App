import { Grid, Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import PetsIcon from '@mui/icons-material/Pets';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

export const Sidebar = ({ setRenderControl, renderControl }) => {
  // const user = useSelector((state) => state.user.User);
  
  
  return (
    <>
      <Grid item xs={0.2}></Grid>
      <Grid item xs={2} style={{ marginBottom: '20px' }}>
        <Grid
          p={2}
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: 'solid 1px lightgrey',
            borderRadius: '8px',
          }}
        >
          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
              borderRadius: '8px',
            }}
            sx={{"&:hover": {
              backgroundColor: 'lightblue',
            },}}
            onClick={() => {
              setRenderControl({
                  shelterPets: true,
                  shelterProducts: false,
                  shelterNewPet: false,
                  shelterNewProduct: false
                  
              });
            }}
          >
            <PetsIcon color='primary' />
            <Typography
              
              style={{ fontWeight: 'lighter',borderRadius: '8px', }}
             
            >
              Pets
            </Typography>
          </Box>

          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
              borderRadius: '8px',
            }}
            sx={{"&:hover": {
              backgroundColor: 'lightblue',
            },}}
            onClick={() =>
              setRenderControl({
                  shelterPets: false,
                  shelterProducts: true,
                  shelterNewPet: false,
                  shelterNewProduct: false
              })
            }
          >
            <InventoryOutlinedIcon color='primary' />
            <Typography
                       
            >
              Products
            </Typography>
          </Box>
          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
              borderRadius: '8px',
            }}
            sx={{"&:hover": {
              backgroundColor: 'lightblue',
            },}}
            onClick={() =>
              setRenderControl({
                  shelterPets: false,
                  shelterProducts: false,
                  shelterNewPet: false,
                  shelterNewProduct: true
              })
            }
          >
            <BookmarkAddIcon color='primary' />
            <Typography
                    
            >
              New Product
            </Typography>
          </Box>

          <Box
            p={2}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
              borderRadius: '8px',
            }}
            sx={{"&:hover": {
              backgroundColor: 'lightblue',
            },}}
            onClick={() =>
              setRenderControl({
                  shelterPets: false,
                  shelterProducts: false,
                  shelterNewPet: true,
                  shelterNewProduct: false
              })
            }
          >
            <DeleteIcon color='primary' />
            <Typography 
           
            
          >
              New Adoption
            </Typography>
          </Box>

         
        </Grid>
      </Grid>
    </>
  );
};


export default Sidebar;