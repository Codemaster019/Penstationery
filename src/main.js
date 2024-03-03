import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import App from './app';

function Main() {
  return (
    <div>
      {/* <App /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
