import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material';
import { PlayCircleFilled} from '@mui/icons-material';
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  const { image, title } = movie;
  return (
    <Box sx={{ position: "relative" }}>
      <Card sx={{ borderRadius: "10px" }}>
        <CardMedia
          component="img"
          image={image}
          sx={{ width: "100%", height: "300px", margin: "0 auto" }}
          alt="green iguana"
        />
        <CardContent sx={{ position: "absolute", top: "0", width: "100%" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              color: "#05595B",
              fontWeight: "bold",
              fontSize: "24px",
              background: "#E2D784",
              width: "100px",
              textAlign: "center",
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            New
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              color: "#05595B",
              fontWeight: "bold",
              fontSize: "18px",
              background: "#E2D784",
              width: "200px",
              textAlign: "center",
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            {title}
          </Typography>
        </CardContent>
        <PlayCircleFilled
          className="playButton"
          sx={{
            fontSize: "70px",
            color: "rgba(6, 19, 21, 0.804)",
            cursor: "pointer",
            margin: "auto",
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            transition: "0.3s",
          }}
        />
      </Card>
    </Box>
  );
};

export default MovieCard;