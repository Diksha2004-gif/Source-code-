import React from "react";
import Auth from "./Auth";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <h1>Personal Finance Manager</h1>
      <Auth />
      <Dashboard />
    </div>
  );
}

export default App;
