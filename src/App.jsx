import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import ScrollJacked from "./components/ScrollJacked";
import TextAnimation from "./components/TextAnimation";
import { useGSAP } from "@gsap/react";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  return (
    <main>
      <Hero />
      <Stats />
      <ScrollJacked />
      <div className="min-h-[200vh] border-[10px] border-[red]"></div>
      {/* <TextAnimation /> */}
    </main>
  );
}

export default App;
