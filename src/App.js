import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <div>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
