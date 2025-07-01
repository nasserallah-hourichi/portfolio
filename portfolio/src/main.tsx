import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio/">
    <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/components" element={<ComponentsPage />} /> */}
          <Route path="/projects" element={<ProjectsPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
