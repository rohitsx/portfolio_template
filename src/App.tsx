import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Coding_mountain_react_dev_home_page from "./coding-mountain-react-dev/pages/homePage";
import ProductDetail from "./coding-mountain-react-dev/components/ProductDetail";
import ProductList from "./coding-mountain-react-dev/components/ProductList";
//import HomePage from "./rohitsx/Rohit";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<HomePage />} />*/}
        <Route path="/" element={<Coding_mountain_react_dev_home_page />}>
          <Route index element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
