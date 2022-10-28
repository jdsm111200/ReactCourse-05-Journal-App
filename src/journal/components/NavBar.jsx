import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { UserButtomMenu } from "./";

export const NavBar = ({ onDrawer, open }) => {
  const handleDrawer = () => {
    onDrawer(!open);
  };
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton color="inherit" onClick={() => onDrawer(!open)}>
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Journal App
        </Typography>
        <UserButtomMenu />
      </Toolbar>
    </AppBar>
  );
};
