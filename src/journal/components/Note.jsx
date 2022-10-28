import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ImageGallery } from "./";

export const Note = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          28 de agosto de 2021
        </Typography>
      </Grid>
      <Grid item>
        <Button sx={{ padding: 2 }} color="primary">
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          label="Title"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={5}
        />
      </Grid>
      <Grid container justifyContent="center">
        <ImageGallery />
      </Grid>
    </Grid>
  );
};
