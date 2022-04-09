import React, { useEffect, useState } from "react";

const useMovies = () => {
    const [movies, setMovies] = useState([])
  const [anime, setAnime] = useState([]);
  const [people, setPeopele] = useState([]);
  const [location, setLocation] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([])
    

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
          setAnime(data.slice(0, 9).reverse());
        setMovies(data.reverse())
        setPeopele(data.people);
        setLocation(data.location);
        setSpecies(data.species);
        setVehicles(data.vehicles);

        console.log(data)
      });
  }, []);

  console.log(people)
  console.log(location);
  console.log(species);
  console.log(vehicles);
  return { anime, movies, people, location, species, vehicles };
};

export default useMovies;
