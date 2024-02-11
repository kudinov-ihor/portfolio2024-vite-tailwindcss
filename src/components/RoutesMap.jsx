import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
const RoutesMap = () => {
  return (
    <Routes>
      {navLinks.map((link) => (
        <Route
          key={link.href}
          path={link.href}
          element={<link.component/>}
        />
      ))}
    </Routes>
  );
};

export default RoutesMap;
