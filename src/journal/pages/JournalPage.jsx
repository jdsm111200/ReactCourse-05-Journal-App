import { AddOutlined, MailOutline, Opacity } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Note as NoteView, NothingSelected } from "../components";
import { JournalLayout } from "../layouts/";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelected />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{fontSize:30}} />
      </IconButton>
    </JournalLayout>
  );
};
