import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Hero } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Hero />} />
      </Routes>
    </div>
  );
};

export default App;
