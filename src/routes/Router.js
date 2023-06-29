import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Inventory from "../components/inventory/Inventory";
import AddProduct from "../components/inventory/AddProduct";
import Login from "../components/login/Login";
import Admin from "../components/admin/Admin";
import AddAdmin from "../components/admin/AddAdmin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="inventory" element={<Inventory />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="admin" element={<Admin />} />
          <Route path="addAdmin" element={<AddAdmin />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
