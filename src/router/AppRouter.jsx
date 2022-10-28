import { createBrowserRouter, createRoutesFromElements, Navigate, Route, Routes, } from "react-router-dom";
import { AuthRoutes } from "../auth/routes";
import { JournalPage } from "../journal/pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<JournalPage />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);
