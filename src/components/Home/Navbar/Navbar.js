import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { InputBase } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { Search } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#062C30" }}>
        <Toolbar>
          <Link to="/home" style={{flex:1, textDecoration:'none', color:'whitesmoke'}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ex-Anime
            </Typography>
          </Link>
          <Box sx={{ position: "relative" }}>
            <InputBase
              sx={{
                flex: 1,
                color: "whitesmoke",
                marginLeft: "24px",
                position: "relative",
              }}
              placeholder="Search Favourite Films"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Search
              sx={{
                color: "whitesmoke",
                position: "absolute",
                left: "0",
                marginTop: "3px",
              }}
            />
          </Box>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "#ffffff" }}>Movies</Button>
          </NavLink>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "#ffffff" }}>Genre</Button>
          </NavLink>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "#ffffff" }}>Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
