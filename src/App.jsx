import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUpForm" element={<SignUpForm />} />
      <Route path="/LoginForm" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
