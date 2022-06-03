import { Carousel } from 'react-carousel-minimal'

// Pueden personalizando pasando las props con otros valores. Al final pisa las props
// que trae por defecto, asi que vuelvan a pasar la prop con el valor a cambiar

const CarouselCustom = (props) => {
    const data = props.images.map((elem) => ({ image: elem }))
    return (
        <>
            <Carousel
                data={data}
                automatic={true}
                time={5000}
                radius="5px"
                dots={true}
                slideImageFit="contain"
                thumbnails={false}
                slideBackgroundColor="#EDEDED"
                style={{
                    textAlign: 'center',
                    maxHeight: '100vh',
                }}
                {...props}
            ></Carousel>
        </>
    )
}

export default CarouselCustom
