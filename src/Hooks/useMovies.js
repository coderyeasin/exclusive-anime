import React, { useEffect, useState } from "react";

const useMovies = () => {
    const [movies, setMovies] = useState([])
  const [anime, setAnime] = useState([]);
  const [peoples, setPeoples] = useState([]);
  const [location, setLocation] = useState([]);
  const [specie, setSpecie] = useState([]);
  const [vehicle, setVehicle] = useState([])
  const [loading, setLoading] = useState(true)
    

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        setAnime(data.slice(0, 9).reverse());
        setMovies(data.reverse());
        setLoading(false);
      });
  }, []);

      useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people/")
          .then((res) => res.json())
          .then((data) => {
            setPeoples(data)
              setLoading(false);
          });
      }, []);
      useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/species/")
          .then((res) => res.json())
          .then((data) => {
            setSpecie(data)
            setLoading(false);});
      }, []);
      useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/locations/")
          .then((res) => res.json())
          .then((data) => {
              setLoading(false);
            setLocation(data)
          });
      }, []);
      useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/vehicles//")
          .then((res) => res.json())
          .then((data) => {
              setLoading(false);
            setVehicle(data)
          });
      }, []);

  console.log(peoples)
  console.log(location);
  console.log(specie);
  console.log(vehicle);
  return { anime, movies, peoples, location, specie, vehicle, loading };
};

export default useMovies;
