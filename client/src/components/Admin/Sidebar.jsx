import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Swal from 'sweetalert2';

export const Sidebar = ({ setRenderControl, renderControl }) => {
  const user = useSelector((state) => state.user.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleDeleteAccount = () => {
    Swal.fire({
      title: 'Esta seguro de Eliminar su cuenta?',
      text: 'Usted no podra revertir esta Accion!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
    }).then((result) => {
      if (result.isConfirmed) {
        // dispatch(putUser(user.id, { isBanned: true }));
        // logout();
      }
    });
  };

  return (
    <>
      <Grid item xs={0.5}></Grid>
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
            }}
          >
            <PersonIcon color='primary' />
            <Typography
              onClick={() => {
                setRenderControl({
                    shelterPets: true,
                    shelterProducts: false,
                    shelterReviews: false,
                    shelterAccount: false
                    
                });
              }}
              style={{ fontWeight: 'lighter' }}
            >
              Mis Mascotas
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
            }}
          >
            <BookmarkAddIcon color='primary' />
            <Typography
              onClick={() =>
                setRenderControl({
                    shelterPets: false,
                    shelterProducts: true,
                    shelterReviews: false,
                    shelterAccount: false
                })
              }
            >
              Mis Productos
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
            }}
          >
            <BookmarkAddIcon color='primary' />
            <Typography
              onClick={() =>
                setRenderControl({
                    shelterPets: false,
                    shelterProducts: false,
                    shelterReviews: true,
                    shelterAccount: false
                })
              }
            >
              Mis Avisos
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
            }}
          >
            <DeleteIcon color='primary' />
            <Typography onClick={handleDeleteAccount}>
              Mi cuenta
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
            }}
          >
            <ExitToAppIcon color='primary' />
            <Typography onClick={() => navigate('/')}>Salir</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};


export default Sidebar;