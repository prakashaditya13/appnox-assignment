/*
Project Name:- Appnox Search Screen Assignment
Date:- 13th April, 2024,
Developer Name:- Aditya Prakash
Developer Email:- prakashaditya13011999@gmail.com
Developer Github:- https://github.com/prakashaditya13 
*/



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResult from "./SearchResult.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  {/* Routing Section */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search/:resultName" element={<SearchResult/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
