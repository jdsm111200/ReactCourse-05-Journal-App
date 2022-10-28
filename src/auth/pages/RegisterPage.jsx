import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layouts";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              type="text"
              label="Name"
              placeholder="User Name"
              fullWidth
            />
          </Grid>
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
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              type="confirm-password"
              label="Confirm Password"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginY: 1 }}>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid container justifyContent="end" sx={{ marginTop: 1 }}>
            <Typography sx={{ marginRight: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link color="inherit" component={RouterLink} to="/auth/login">
              Inicia Sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
