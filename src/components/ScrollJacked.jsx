import React from "react";
import Restaking from "./Restaking";
import { useGSAP } from "@gsap/react";
import SecureBattle from "./SecureBattle";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

export default function ScrollJacked() {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".jacked-container",
      start: "top top",
      end: "+=800px",
      // pinnedContainer: ".jacked-container",
      // markers: true,
      // pin: true,
      scrub: true,
      animation: gsap.timeline().to(".black-rip", {
        x: "-50%",
      }),
    });

    gsap.to(".crypto-card", {
      x: "-100%",
      repeat: -1,
      duration: 6,
      ease: 'none'
    });
  });

  return (
    <div className="bg-gold jacked-container min-h-[300vh]">
      {/* Container for images and cards */}
      <div className="sticky z-[2] top-0 min-h-[100vh]">
        <div className="absolute right-0 center-y flex overflow-hidden">
          <img src="/crypto-cards.png" className="crypto-card" alt="" />
          <img
            src="/crypto-cards.png"
            className="pl-[16px] crypto-card"
            alt=""
          />
          <img
            src="/crypto-cards.png"
            className="pl-[16px] crypto-card"
            alt=""
          />
        </div>
      </div>

      <div className="z-[6] sticky top-0 min-h-[100vh] mt-[-100vh] w-full overflow-hidden">
        {/* Black overlay with adjusted clippath */}
        <div className="bg-[#141417] black-rip origin-left absolute w-full h-full z-[2]">
          <img
            src="/paper-rip.png"
            className="absolute w-[!80px] paper-rip  z-[4] h-full center-y right-[-2.6%] "
            alt=""
          />
        </div>
      </div>

      {/* Content on the left */}
      <div className="z-[10] mt-[-40vh] text-white min-h-[100vh] w-[50%] sticky top-0">
        {" "}
        <Restaking />
        {/* <SecureBattle /> */}
      </div>
    </div>
  );
}
