import { Box, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useMovies from '../../Hooks/useMovies';
import CircularProgress from "@mui/material/CircularProgress";

const ExploreAnime = () => {
    const { id } = useParams()
    const { peoples, location, specie, vehicle, loading } = useMovies();
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
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!loading && (
        <Box style={{ position: "relative" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="340"
            image={movie_banner}
          />

          <Container
            sx={{
              position: "absolute",
              top: 90,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(223, 231, 232, 0.718)",
              padding: "10px",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} style={{ position: "relative" }}>
                <Paper elevation={3} sx={{ width: "220px" }}>
                  <img
                    src={image}
                    style={{
                      width: "100%",
                      height: "220px",
                      borderRadius: "10px",
                      padding: "5px",
                    }}
                    alt=""
                  />
                </Paper>
                <Typography
                  my={2}
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Rating Score : {rt_score}%
                </Typography>
                <Box
                  my={1}
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ fontSize: 14, textDecoration: "none" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Release Date: {release_date}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Running Time: {running_time} mins
                  </Typography>
                </Box>
                <Typography variant="subtitle1" gutterBottom component="div">
                  <strong>Original Title : </strong> {original_title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                  <strong>Title Romanised : </strong>
                  {original_title_romanised}
                </Typography>

                <Typography variant="subtitle1" gutterBottom component="div">
                  <strong>Director:</strong> {director}
                </Typography>

                <Typography variant="subtitle1" gutterBottom component="div">
                  <strong>Producer:</strong> {producer}
                </Typography>

                <Typography variant="subtitle1" gutterBottom component="div">
                  <strong>Available Locations:</strong>
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {location.map((e) => (
                    <Paper
                      elevation={3}
                      style={{
                        width: "220px",
                        margin: "10px",
                        padding: "5px",
                        background: "#05595B",
                        color: "whitesmoke",
                      }}
                    >
                      <Typography variant="body1" gutterBottom>
                        Name: {e.name}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Climate: {e.climate}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Surface Water: {e.surface_water}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Terrain: {e.terrain}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "28px",
                    textTransform: "capitalize",
                    color: "#05595B",
                  }}
                  variant="h6"
                  component="div"
                  gutterBottom
                >
                  Title: {title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Summary :</strong> {description}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                  <strong>Peoples :</strong>
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {peoples.map((e) => (
                    <Paper
                      elevation={3}
                      style={{
                        width: "220px",
                        margin: "10px",
                        padding: "5px",
                        background: "#05595B",
                        color: "whitesmoke",
                      }}
                    >
                      <Typography variant="body1" gutterBottom>
                        Name: {e.name}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Age: {e.age}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Gender: {e.gender}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Hair Color: {e.hair_color}
                      </Typography>
                    </Paper>
                  ))}
                </Box>

                <Typography variant="subtitle1" gutterBottom component="div">
                  <strong>Species :</strong>
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {specie.map((e) => (
                    <Paper
                      elevation={3}
                      style={{
                        width: "220px",
                        margin: "10px",
                        padding: "5px",
                        background: "#05595B",
                        color: "whitesmoke",
                      }}
                    >
                      <Typography variant="body1" gutterBottom>
                        Name: {e.name}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Classification: {e.classification}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Eye Colors: {e.eye_colors}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Hair Colors: {e.hair_colors}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
                <Typography variant="subtitle1" gutterBottom component="div">
                  <strong>Vehicles :</strong>
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {vehicle.map((e) => (
                    <Paper
                      elevation={3}
                      style={{
                        width: "220px",
                        margin: "10px",
                        padding: "5px",
                        background: "#05595B",
                        color: "whitesmoke",
                      }}
                    >
                      <Typography variant="body1" gutterBottom>
                        Name: {e.name}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Description: {e.description}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Length: {e.length}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Vehicle class: {e.vehicle_class}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default ExploreAnime;