import React from "react";
import { Route, Router } from "react-router-dom";
import { Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Route index elements={<>Hero</>} />
      </Router>
    </div>
  );
};

export default App;
