import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelected = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "primary.main",
        minHeight: "calc(88vh)",
        padding: 4,
        borderRadius: 5,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ color: "white" }}>
          Create or Select an entry
        </Typography>
      </Grid>
    </Grid>
  );
};
