import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./MyComponents/Signup";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route>
          <Route index element={<Signup/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
