import React, {useEffect, useState} from "react";
import { Box } from "@mui/material";
import MovieCard from "./MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const HeroArea = () => {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        setAnime(data.slice(0,9).reverse());
      });
  }, []);

  return (
    <Box >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          centeredSlides: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        style={{  width: "100%" }}
      >
        {anime.map((movie) => (
          <SwiperSlide >
            <MovieCard key={movie._id} movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroArea;
