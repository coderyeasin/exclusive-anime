import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";

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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: 14 }}
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
            <Typography
              sx={{
                fontSize: 18,
                position: "absolute",
                top: "0",
                right: "0",
                border: "5px solid #062C30",
                borderRadius: "50%",
                marginRight: "10px",
                marginTop: "10px",
                paddingX: "5px",
                color: "#E2D784",
                background: "#05595B",
              }}
              color="text.secondary"
              gutterBottom
            >
              {rt_score}
            </Typography>
          </Box>
          <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Film;
