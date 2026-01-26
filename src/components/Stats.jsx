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
        "<0.4",
      );
  });

  const stats = [
    {
      value: 7.96,
      label: "Total Value Locked",
      suffix: "B",
      prefix: "$",
      bg: "#FF983F", height: 750
    },
    { value: 13, label: "Stake Rewards", suffix: "%", bg: "#16F95E", height: 792 },
    { value: 6, label: "Liquid Rewards", suffix: "%", bg: "#767FFC", height: 750 },
    { value: 3, label: "Credit Card Cashback", suffix: "%", bg: "#F25390", height: 681 },
  ];

  return (
    <section className=" stats-cont pt-[80px] flex gap-[12px] relative justify-center items-end overflow-hidden ">
      {stats.map((stat) => {
        return (
          <div
            className="rounded-[64px] w-full max-w-[346px] flex flex-col justify-center items-center gap-[32px]"
            style={{ backgroundColor: stat.bg, height: stat.height }}
          >
            {/* Value */}
            <div className="text-[76px] font-bold leading-[100%] polymath">
              <span>{stat.prefix}</span> 
              <span>{stat.value}</span> 
              <span>{stat.suffix}</span>
            </div>

            {/* Label */}
            <div className="text-[38px] font-bold leading-[100%] text-center break-words max-w-[190px]">{stat.label}</div>
          </div>
        );
      })}
    </section>
  );
}
