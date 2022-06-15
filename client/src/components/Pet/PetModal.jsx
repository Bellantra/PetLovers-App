import {Button, Dialog , DialogActions, DialogContent, DialogContentText, DialogTitle, Slide} from '@mui/material'
import Carousel from 'react-material-ui-carousel'

import FemaleIcon from '@mui/icons-material/Female'
import MaleIcon from '@mui/icons-material/Male'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationCityIcon from '@mui/icons-material/LocationCity'

import { forwardRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    cleanPetDetail,
    closeModal,
} from '../../redux/features/adopt/adoptSlice'
import Loading from '../Loading/Loading'
import styles from './pet-modal.module.css'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default () => {
    const dispatch = useDispatch()
    const {
        petDetail,
        statusDetail: status,
        openModal,
    } = useSelector((state) => state.adopt)

    const handleClose = () => {
        dispatch(closeModal())
        setTimeout(() => {
            dispatch(cleanPetDetail())
        }, 500);
    }

    return (
        <div>
            <Dialog
                open={openModal}
                TransitionComponent={Transition}
                onClose={handleClose}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
                scroll={'body'}
                maxWidth={'sm'}
                fullWidth={true}
            >
                {status === 'success' ? (
                    <>
                        <div className={styles.title}>
                            <DialogTitle>
                                {petDetail.nickname}
                                <hr />
                            </DialogTitle>
                        </div>
                        <DialogContent>
                            <div className={styles.detail}>
                                <Carousel
                                    height={200}
                                    className={styles.carousel}
                                >
                                    {petDetail.image.map((image, i) => (
                                        <img src={image} key={i} />
                                    ))}
                                </Carousel>
                                <ul>
                                    <li> <AccessTimeIcon sx={{ fontSize: 40, margin: '0 8px' }} /> {petDetail.age}</li>
                                    <li> <LocationCityIcon sx={{ fontSize: 40, margin: '0 8px' }}/> {petDetail.city}</li>
                                    <li> {petDetail.genre === 'Male' 
                                        ? <MaleIcon sx={{ fontSize: 40, margin: '0 8px' }} /> 
                                        :<FemaleIcon sx={{ fontSize: 40, margin: '0 8px' }} />}
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.description}>
                                <h3>Descripton:</h3>
                                <DialogContentText id="alert-dialog-slide-description">
                                    {petDetail.description}
                                </DialogContentText>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Adopt me!</Button>
                        </DialogActions>
                    </>
                ) : (
                    <DialogContent>
                        <Loading />
                    </DialogContent>
                )}
            </Dialog>
        </div>
    )
}
