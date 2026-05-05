import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { App } from "./App";
import { NewLink } from "./pages/NewLink";
import { Analytics } from "./pages/Analytics";
import { LinkDetails } from "./pages/LinkDetails";
import { Toaster } from "sonner";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "create-new-link", element: <NewLink /> },
      { path: "details-link", element: <LinkDetails /> },
      { path: "analytics", element: <Analytics /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>,
);
