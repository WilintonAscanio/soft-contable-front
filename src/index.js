import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/Router";
import './styles.scss'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
