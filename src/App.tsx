import "tailwindcss/tailwind.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "pages/Login";
import { RegisterPage } from "pages/Register";
import { PostsPage } from "pages/Posts";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
