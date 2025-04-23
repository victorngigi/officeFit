import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Chairs from "./Pages/Chairs";
import Desks from "./Pages/Desks";
import Bookshelves from "./Pages/Bookshelves";
import ConferenceTables from "./Pages/ConferenceTables";
import ProductPage from "./pages/ProductPage";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/desks" element={<Desks />} />
        <Route path="/bookshelves" element={<Bookshelves />} />
        <Route path="/conference-tables" element={<ConferenceTables />} />
        <Route path="/product/:category/:id" element={<ProductPage />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
