import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <main>
        <h1>Welcome to RottenBooks</h1>
        <p>Your book review platform</p>
      </main>
    </div>
  );
}

export default App;
