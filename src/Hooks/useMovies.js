import React, { useEffect, useState } from "react";

const useMovies = () => {
    const [movies, setMovies] = useState([])
    const [anime, setAnime] = useState([]);
    

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
          setAnime(data.slice(0, 9).reverse());
        setMovies(data.reverse())
        console.log(data)
      });
  }, []);
  return { anime, movies };
};

export default useMovies;
