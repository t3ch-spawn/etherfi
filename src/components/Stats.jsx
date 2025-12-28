import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import React from "react";

export default function Stats() {
  useGSAP(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".stats-cont",
          start: "top 50%",
        },
      })
      .from(".stat-rect", {
        opacity: 0,
        // scale: 0.6,
        y: "50%",
        x: "-300%",

        stagger: 0.1,
      })
      .from(
        ".stat-rect div",
        {
          x: "60%",
          opacity: 0,
          stagger: 0.09,
        },
        "<0.4"
      );
  });

  return (
    <section className="max-h-[750px] stats-cont h-[100vh] flex relative justify-start items-start overflow-hidden ">
      <div className="stat-rect top-[-90%] left-[-4%] bg-[#FFC23F]">
        <div className="ml-[140px] mb-[40px]">
          $7.96B <span>TVL</span>
        </div>
      </div>
      <div className="stat-rect top-[-70%] left-[15%] bg-[#16F95E]">
        <div>
          3% <span>Stake Rewards</span>
        </div>
      </div>
      <div className="stat-rect z-[5] relative top-[-58%] left-[39%] bg-[#6C75FF]">
        <div>
          6% <span>Liquid Rewards</span>
        </div>
      </div>
      <div className="stat-rect top-[-45%] left-[63%] bg-[#F25490]">
        <div>
          3% <span>Credit Card Cashback</span>
        </div>
      </div>
      <div className="stat-rect top-[-4%] right-[6.2%] !w-[340px] bg-[#3742DC]">
        <div className="text-white !rotate-[-50deg] mb-[270px]">Ether.fi</div>
      </div>
    </section>
  );
}
