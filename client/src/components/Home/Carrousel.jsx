// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { PhotoCarrousel, AdoptionDiv, AdoptionTitle } from "./HomeStyle";
const photos = [
    {
        "photo": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    },
    {
        "photo": "https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
    },
    {
        "photo": "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
    },
    {
        "photo": "https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        "photo": "https://images.unsplash.com/photo-1556866261-8763a7662333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        "photo": "https://images.unsplash.com/photo-1536809188428-e8ecf663d0be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
    },
    {
        "photo": "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    }

]

export default function Carrousel() {
  return (
    <>
        <AdoptionDiv>
            <AdoptionTitle>Adoption</AdoptionTitle>
        </AdoptionDiv>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        sx={{display: "flex", alignItems: "center", marginBottom: "2rem"}}
      >
        {photos.map(pic=>
        <SwiperSlide sx={{height: 10}} key={pic.photo}>
            <PhotoCarrousel src={pic.photo} alt="photos"/>
          </SwiperSlide>   
        )}
      </Swiper>
    </>
  );
}
