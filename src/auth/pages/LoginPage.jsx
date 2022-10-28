import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layouts";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              type="email"
              label="Email"
              placeholder="user@example.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField type="password" label="Password" fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginY: 1 }}>
          <Grid item xs={12} md={6}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained" fullWidth>
              <Google />
              <Typography sx={{ marginLeft: 1 }} variant="button">
                Login with Google
              </Typography>
            </Button>
          </Grid>
          <Grid container justifyContent="end" sx={{ marginTop: 1 }}>
            <Typography sx={{ marginRight: 1 }}>
              ¿No tienes una cuenta?
            </Typography>
            <Link color="inherit" component={RouterLink} to="/auth/register">
              Registrate
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
