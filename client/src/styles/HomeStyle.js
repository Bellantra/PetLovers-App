import styled from "styled-components";

export const UnderConstructionStyle = styled.h1`
    text-align: center;
    font-size: 7rem;
    font-weight: 800;
    line-height: 7rem;
    background: linear-gradient(180deg, #0987E0 0%, #1F4795 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    mix-blend-mode: normal;
`;

/* NavBar */
/* export const NavContainer= styled.div`
    background-color: white !important;
    box-shadow: none !important;
` */
/* .buttonLogIn{
    background-color: #1565C0 !important;
    box-shadow:  2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12) !important;
    border-radius: 4px !important;
} */
/* .navButtons{
    text-decoration: none;
    color: #515151;
}
 */
/* Hero */
export const DivHero = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const TextHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`;
export const DivImgHero = styled.div`
    margin-right: 1rem;
`;
export const ImageHero = styled.img`
    margin-top: 2rem;
    margin-right: 2rem;
`;
export const WeCare = styled.h2`
    font-size: 7rem;
    font-weight: 800;
    line-height: 7rem;
    background: linear-gradient(180deg, #0987E0 0%, #1F4795 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    mix-blend-mode: normal;
`;
export const AboutPets = styled.h2`
    font-size: 6rem;
    font-weight: 300;
    line-height: 6rem;
`;
export const ParagraphHero = styled.p`
    width: 60%;
    margin-left: 1rem;
    font-weight: 300;
    font-size: 1rem;
    line-height: 20px;
    margin-top: 1rem;
`;
export const DivButtonAdopt = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 60%;
    margin-top: 3rem;
`;
/* .buttonAdoptNow{
    background-color: #1565C0 !important;
    box-shadow:  2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12) !important;
    border-radius: 4px !important;
} */
/* .imageLogo{
    margin-right: 3rem;
} */
export const ImageDogPaw1 = styled.img`
    position: absolute;
    left: 15%;
    right: 30%;
    top: 30%;
    bottom: -15%;
`;
export const ImageDogPaw2 = styled.img`
    position: absolute;
    left: 29%;
    right: 16.81%;
    top: 30%;
    bottom: -15.1%;
`;
export const ImageDogPaw3 = styled.img`
    position: absolute;
    left: 18%;
    right: 30%;
    top: 100%;
    bottom: -15.83%;
`;
export const ImageDogPaw4 = styled.img`
    position: absolute;
    left: 29%;
    right: -10.59%;
    top: 95%;
    bottom: -1.72%;
`;
export const ImageDogPaw5 = styled.img`
    position: absolute;
    left: 40%;
    right: 25.73%;
    top: 81%;
    bottom: -15.83%;
`;

/* About us */
export const DivAboutUs = styled.div`
    background-image: url(../assets/about-us-bkg.png);
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;
export const AboutTitle = styled.h1`
    font-weight: 800;
    font-size: 5rem;
    line-height: 5rem;
    color: white;
`;
export const ParagraphAbout = styled.p`
    width: 40rem;
    font-weight: 300;
    font-size: 1rem;
    color: white;
    line-height: 2rem;
    background-color: #51515184;
    padding: 1em;
    border-radius: 2em;
    margin-top: 2em;
`

/* Carrousel */
/* .swiper {
    width: 100%;
    height: 100%;
  } */
/* .mySwiper{
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
} */
/*   .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
/*     display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
export const PhotoCarrousel = styled.img`
    height: 25rem;
    width: 25rem;
    border-radius: 20px;
`
export const AdoptionDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
`
export const AdoptionTitle = styled.h2`
    width: 22rem;
    height: 5rem;
    font-weight: 800;
    font-size: 5rem;
    line-height: 5rem;
    letter-spacing: -0.5px;
    text-align: center;
`