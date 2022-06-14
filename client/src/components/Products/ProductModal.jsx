import {Button, Dialog , DialogActions, DialogContent, DialogContentText, DialogTitle, Slide} from '@mui/material'
import PaidIcon from '@mui/icons-material/Paid'
import InventoryIcon from '@mui/icons-material/Inventory'
import Carousel from 'react-material-ui-carousel'
import { forwardRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    cleanDetail,
    closeModal,
} from '../../redux/features/product/productSlice'
import Loading from '../Loading/Loading'
import styles from './product-modal.module.css'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function ProductModal() {
    const dispatch = useDispatch()
    const {
        productDetail,
        statusDetail: status,
        openModal,
    } = useSelector((state) => state.product)

    const handleClose = () => {
        dispatch(closeModal())
    }

    useEffect(() => {
        return () => dispatch(cleanDetail)
    }, [])

    return (
        <div>
            <Dialog
                open={openModal}
                TransitionComponent={Transition}
                onClose={handleClose}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
                scroll={'body'}
                fullWidth={'sm'}
                maxWidth={'sm'}
            >
                {status === 'success' ? (
                    <>
                        <div className={styles.title}>
                            <DialogTitle>
                                {productDetail.name}
                                <hr />
                            </DialogTitle>
                        </div>
                        <DialogContent>
                            <div className={styles.detail}>
                                <Carousel
                                    height={200}
                                    className={styles.carousel}
                                >
                                    {productDetail.img.map((image, i) => (
                                        <img src={image} key={i} />
                                    ))}
                                </Carousel>
                                <ul>
                                    <li> <PaidIcon sx={{ fontSize: 40, margin: '0 8px' }} /> {productDetail.price}</li>
                                    <li> <InventoryIcon sx={{ fontSize: 40, margin: '0 8px' }}/> {productDetail.stock}</li>
                                </ul>
                            </div>
                            <div className={styles.description}>
                                <h3>Descripton:</h3>
                                <DialogContentText id="alert-dialog-slide-description">
                                    {productDetail.description}
                                </DialogContentText>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Buy</Button>
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
