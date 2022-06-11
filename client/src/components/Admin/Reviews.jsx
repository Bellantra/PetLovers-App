import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import Alerts from '../GeneralFuntions/Alerts';
import axios from 'axios';
import logError from '../GeneralFuntions/logError';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, TextField, Button, Typography } from '@mui/material';
import 'sweetalert2/dist/sweetalert2.css';
import { useEffect, useState } from 'react';

export default function Review() {
  const { User } = useSelector((state) => state.user);
  const [reviews, SetReviews] = useState();
  const getReviews = async () => {
    SetReviews(await axios.get(`/customers/reviews/${User.id}`));
  };

  async function postreview(values) {
    try {
      await axios.post(`/customers/reviews/${User.id}`, values);
    } catch (error) {
      logError(error);
    }
  }
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <>
      <Grid item xs={1}></Grid>
      <Grid item xs={7}>
        <Typography gutterBottom variant='h4'>
          Mis Review
        </Typography>
        <Typography gutterBottom variant='body1'>
          Como Evaluaria la Experiencia con Carry?
        </Typography>

        <Formik
          initialValues={{
            review: '',
          }}
          onSubmit={(values) => {
            postreview(values);
            Alerts('success', 'Gracias por su compartir su opinión');
          }}
        >
          {({ values, handleSubmit, handleChange, handleBlur }) => (
            <Form className='PostReview' onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label='New Review'
                name='review'
                onChange={handleChange}
                onBlur={handleBlur}
                required
                value={values.review || ''}
                multiline
                variant='outlined'
                style={{ marginBottom: '20px' }}
              />

              <Button color='primary' variant='contained' type='submit'>
                Crear
              </Button>
            </Form>
          )}
        </Formik>

        <TableContainer
          component={Paper}
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            border: 'solid 1px lightgrey',
          }}
        >
          <Table aria-label='simple table' stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell
                  align='center'
                  style={{ color: '#1565C0', fontWeight: 'bolder' }}
                >
                  Id
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#1565C0', fontWeight: 'bolder' }}
                >
                  Descripcion
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews?.data?.length &&
                reviews?.data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align='center'>{row.id}</TableCell>
                    <TableCell align='center'>{row.review}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}
