import { Carousel } from 'react-carousel-minimal'

const CarouselCustom = (props) => {
    // eslint-disable-next-line react/prop-types
    const data = props.images.map((elem) => ({ image: elem }))
    return (
        <>
            <Carousel
                {...props}
                data={data}
                automatic={true}
                time={5000}
                radius="5px"
                dots={true}
                slideImageFit="cover"
                slideBackgroundColor="darkgrey"
                style={{
                    textAlign: 'center',
                    maxHeight: '100vh',
                }}
            ></Carousel>
        </>
    )
}

export default CarouselCustom
