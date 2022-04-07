import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material';


const MovieCard = (props) => {
    const{title, image, description} = props.movie
    return (
      <Box sx={{ position: "relative", maxHeight: "500px" }}>
        <Card>
          <CardMedia component="img" image={image} alt="green iguana" />
          <CardContent sx={{ position: "absolute", top: "0" }}>
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
                borderRadius: "25px",
              }}
            >
              New
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: "pink", fontSize: "24px" }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="red">
              {description}
            </Typography>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    );
};

export default MovieCard;