import { Box,  Grid, Typography } from '@mui/material';
import React from 'react';
import useMovies from '../../../Hooks/useMovies';
import Film from './Film/Film';
import CircularProgress from "@mui/material/CircularProgress";


const Movies = () => {
    const { movies, loading } = useMovies();
  return (
    <Box>
      {loading && (
        <Box sx={{ display: "flex", justifyContent:'center', alignItems:'center' }}>
          <CircularProgress />
        </Box>
      )}
      {!loading && (
        <Box sx={{ flexGrow: 1, px: 5 }}>
          <Typography
            sx={{
              fontWeight: 500,
              my: 5,
              fontSize: "28px",
              textTransform: "uppercase",
              color: "#05595B",
              background: "#E2D784",
              width: "300px",
              textAlign: "center",
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
            variant="h6"
            component="div"
            gutterBottom
          >
            Feature Movies
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {movies.map((film) => (
              <Film key={film.id} film={film} />
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Movies;

