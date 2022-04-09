import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const Film = ( props ) => {
    
    const { title, image, release_date, rt_score, running_time } = props.film;

  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card
        sx={{
          position: "relative",
          borderRadius: "10px",
        }}
      >
        <CardMedia
          component="img"
          style={{
            height: "300px",
          }}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Release Date: {release_date}
          </Typography>
          <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Film;
