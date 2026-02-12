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
import Navbar from "./components/Navbar";
import Lottie from "lottie-react";
import stonePile from "../public/stone-pile.json";
import stonePileNo from "../public/stone-no-water.json";
import HoverCard3D from "./components/reusables/HoverCard3D";
import LIquidEarnings from "./components/LIquidEarnings";
import Defi_Native from "./components/Defi_Native";
import EarlyAccess from "./components/EarlyAccess";
import BlogPosts from "./components/BlogPosts";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  return (
    <main className="text-white">
      {/* <Navbar /> */}
      <Hero />
      <Stats />
      <ScrollJacked />
      {/* <div className="min-h-[200vh] px-[10vw] border-[10px] border-[red]">
        <Lottie
          animationData={stonePileNo}
          loop
          autoplay
          // className="lottie-clip"
          style={{ width: 200, height: 200 }}
        />
        <Lottie
          animationData={stonePile}
          loop
          autoplay
          className="lottie-clip"
          style={{ width: 200, height: 200 }}
        />
      </div> */}
      {/* <TextAnimation /> */}

      <LIquidEarnings />
      <Defi_Native/>
      <EarlyAccess/>
      <BlogPosts/>
    </main>
  );
}

export default App;
