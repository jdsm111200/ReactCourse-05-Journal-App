import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "primary.main", minHeight: "100vh", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: { sm: 500 },
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
