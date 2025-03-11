import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import HomePage from "./pages/homePage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
