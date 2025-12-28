import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

function App() {
  return (
    <main>
      <Hero />
      <Stats />
    </main>
  );
}

export default App;
