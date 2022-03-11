import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./style/index.less";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home/index";
import Cookie from "./pages/cookie/index";
import Travel from "./pages/travel";
import Read from "./pages/read";
ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/read" element={<Read />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

reportWebVitals();
