import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "aos/dist/aos.css";
import { AdminProvider } from "./Context/AdminContext";
import LoginButton from "./components/LoginButton";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminProvider>
      <App />
      <LoginButton></LoginButton>
    </AdminProvider>
  </React.StrictMode>
);
