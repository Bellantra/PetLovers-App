/* eslint-disable react/prop-types */
import styled from 'styled-components'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'

const Modal = ({
    estado,
    setEstado,
    mostrarHeader,
    mostrarOverlay,
    posicionModal,
    padding,
}) => {
    const { petDetail, statusDetail } = useSelector((state) => state.adopt)
    return (
        <>
            {estado && statusDetail === 'success' && (
                <Overlay
                    mostrarOverlay={mostrarOverlay}
                    posicionModal={posicionModal}
                >
                    <ContenedorModal padding={padding}>
                        <BotonCerrar onClick={() => setEstado()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                // eslint-disable-next-line react/no-unknown-property
                                className="bi bi-x"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </BotonCerrar>
                        <CardMedia
                            component="img"
                            alt={`It's a ${petDetail.race}`}
                            height="300"
                            image={petDetail.image[0]}
                        />
                        <Typography gutterBottom variant="h5" component="div">
                            {mostrarHeader ? (
                                <EncabezadoModal>
                                    {petDetail.nickname}
                                </EncabezadoModal>
                            ) : null}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            You also should know...
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {petDetail.description}
                        </Typography>
                    </ContenedorModal>
                </Overlay>
            )}
        </>
    )
}

export default Modal

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
      props.mostrarOverlay ? 'rgba(0, 0, 0, 0.5);' : 'rgba(0, 0, 0, 0);'} 
  //si borro align-items y justify-content, con el padding queda alineado a la izquierda pero lindo
  padding: 40px;
  display: flex;
  align-items: ${(props) =>
      props.posicionModal ? props.posicionModal : 'center'};
  justify-content: center;
`
const ContenedorModal = styled.div`
    z-index: 999;
    width: 500px;
    min-heigth: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: ${(props) => (props.padding ? props.padding : '20px')};
`
const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;

    h3 {
        font-weight: 500;
        font-size: 16px;
        color: #1766dc;
    }
`
const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3x ease all;
    border-radius: 5px;
    color: #1766dc;

    &:hover {
        background: #f2f2f2;
    }

    svg {
        width: 100%;
        height: 100%;
    }
`
