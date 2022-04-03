import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Anime = () => {

    const [anime, setAnime] = useState([])
    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((res) => res.json())
            .then((data) => {
            setAnime(data.slice(0, 1))
        })
    },[])

console.log(anime)
    return (
      <div>
        <h3>This is anime</h3>
        <Button variant="contained">Hello World</Button>
        {anime.map((movie) => {
          return (
            <div key={movie.id}>
              <img
                src={movie.image}
                alt="movie"
                className=""
                style={{ width: "20%", height: "300px" }}
              />

              <p>{movie.description}</p>
              <h3>{movie.title}</h3>
              <span>{movie.original_title}</span>
              <span>{movie.original_title_romanised}</span>
              <span>{movie.producer}</span>
              <span>{movie.release_date}</span>
              <span>{movie.rt_score}</span>
              <span>{movie.running_time}</span>
              <span>{movie.url}</span> <br />
              <span>{movie.vehicles.map((e) => e?.length)}</span> <br />
              <span>{movie.species.map((e) => e.length)}</span> <br />
              <span>{movie.people.map((e) => e.length)}</span> <br />
              <span>{movie.locations.map((e) => e.length)}</span> <br />
              <img
                src={movie.image}
                alt="banner"
                className=""
                style={{ width: "20%", height: "200px" }}
              />
            </div>
          );
        })}
      </div>
    );
};

export default Anime;