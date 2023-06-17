import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Inventory from "../components/inventory/Inventory";
import AddProduct from "../components/inventory/AddProduct";
import Login from "../components/login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="inventory" element={<Inventory />} />
          <Route path="addProduct" element={<AddProduct />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
