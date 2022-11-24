import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useState } from "react";
import "./BottomNavigationMUI.css";
// import Home from "@mui/icons-material/Home";

export const BottomNavigationMUI = ({handleOnChange}) => {

  return (
    <BottomNavigation
      showLabels
      onChange={(event, newValue) => {
        handleOnChange(newValue);
      }}
    >
      <BottomNavigationAction
        label="HomeIcon"
        icon={<HomeIcon />}
        value={"Home"}
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon />}
        value={"Favorite"}
      />
    </BottomNavigation>
  );
};
