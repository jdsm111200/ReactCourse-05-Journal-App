import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Toolbar, useMediaQuery } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;
const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop != "isMobile",
})(({ theme, open, isMobile }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  ...(!isMobile && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
}));
export const JournalLayout = ({ children }) => {
  const [drawer, setDrawer] = useState(true);
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("lg"));

  const onDrawer = (open) => {
    setDrawer(open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      {/**Navbar */}
      <NavBar drawerWidth={drawerWidth} onDrawer={onDrawer} open={drawer} />
      {/**Sidebar */}
      <SideBar drawerWidth={drawerWidth} open={drawer} />
      <Main open={drawer} isMobile={isMobile}>
        {/**Toolbar */}
        {<Toolbar />}
        {children}
      </Main>
    </Box>
  );
};
