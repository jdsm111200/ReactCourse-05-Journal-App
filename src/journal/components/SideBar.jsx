import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TurnedInNotOutlined } from "@mui/icons-material";

export const SideBar = ({ drawerWidth = 240, open = true }) => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("lg"));

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant={isMobile ? "temporary" : "persistent"}
      anchor="left"
      open={open}
    >
      <Toolbar />
      <Toolbar>
        <Typography variant="h6">User name</Typography>
      </Toolbar>
      <Divider />

      <List>
        {["Enero", "Febrero", "Marzo", "Abril"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TurnedInNotOutlined />
              </ListItemIcon>
              <ListItemText
                primary={text}
                secondary="Et culpa non irure pariatur minim duis officia deserunt consequat."
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
