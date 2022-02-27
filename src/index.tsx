import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from "react-router-dom";
import "./style/index.less";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home/index";
import Cookie from "./pages/cookie/cookie";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cookie" element={<Cookie />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
