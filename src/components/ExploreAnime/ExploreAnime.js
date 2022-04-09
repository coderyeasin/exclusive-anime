import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';

const ExploreAnime = () => {
    const { id } = useParams()
      const [film, setFilm] = useState([]);

      useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
          .then((res) => res.json())
          .then((data) => {
              const movies = data.find((e) => e.id === id);
            setFilm(movies);
          });
      }, []);
    
    const {
      image,
      title,
      movie_banner,
      director,
      description,
      locations,
      original_title,
      original_title_romanised,
      people,
      producer,
      release_date,
      rt_score,
      running_time,
      species,
      url,
      vehicles,
    } = film;
    return (
      <Box>
        <Navbar />
        <Container sx={{ my: 3 }}>
          <h3>Explore : {id}</h3>
          <h3>Explore : {title}</h3>
          <img src={movie_banner} alt="" />
        </Container>
      </Box>
    );
};

export default ExploreAnime;