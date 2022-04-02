import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Anime = () => {

    const [anime, setAnime] = useState([])
    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((res) => res.json())
            .then((data) => {
            setAnime(data)
        })
    },[])


    return (
      <div>
        <h3>This is anime</h3>
        <Button variant="contained">Hello World</Button>
            {anime.map((e) => {
                return (
                  <div key={e.id}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      {e.title}
                    </Typography>
                  </div>
                );
       })}
      </div>
    );
};

export default Anime;