import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
} from '@mui/material'
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

    const { userInfo } = useSelector((state) => state.user)
    const { shelterDetail } = useSelector((state) => state.shelter)
    
    const handleClose = () => {
        dispatch(closeModal())
        setTimeout(() => {
            dispatch(cleanDetail())
        }, 500)
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
                                    <li>
                                        {' '}
                                        <PaidIcon
                                            sx={{
                                                fontSize: 40,
                                                margin: '0 8px',
                                            }}
                                        />{' '}
                                        {productDetail.price}
                                    </li>
                                    <li>
                                        {' '}
                                        <InventoryIcon
                                            sx={{
                                                fontSize: 40,
                                                margin: '0 8px',
                                            }}
                                        />{' '}
                                        {productDetail.stock}
                                    </li>
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
                            <Button size="small" variant="contained">
                                <a
                                    href={`https://docs.google.com/forms/d/e/1FAIpQLSddhIRTghZ8oNDsqBNN3QffZnqWRgOAoh8rw7pfURT2Uj1xew/viewform?usp=pp_url&entry.1979261734=${productDetail.name}&entry.1040828766=1&entry.512539991=${shelterDetail.name}&entry.577423619=user`}
                                    target="_blank"
                                >
                                    Buy!
                                </a>
                            </Button>
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
