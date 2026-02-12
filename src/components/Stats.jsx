import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Lenis from "lenis";
import React, { useRef } from "react";

export default function Stats() {
  const sectionRef = useRef(null);
  const tlRef = useRef(null);

  useGSAP(
    () => {
      // Initialize Lenis
      const lenis = new Lenis({
        autoRaf: true,
      });

      const split = SplitText.create(".stat-rect", {
        type: "words",
        mask: "words",
        wordsClass: "wordAnim",
      });

      tlRef.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".stats-cont",
            start: "top 20%",
          },
        })
        .from(".stat-rect", {
          scaleY: 0,
          ease: "back.out(1)",
          duration: 0.6,
          stagger: 0.1,
          transformOrigin: "bottom",
        });

      const statRects = document.querySelectorAll(".stat-rect");
      statRects.forEach((rect, idx) => {
        const words = rect.querySelectorAll(".wordAnim");
        tlRef.current.from(
          words,
          {
            yPercent: 100,
            stagger: 0.05,
            ease: "power2.out",
            duration: 0.6,
          },
          idx === 0 ? "<0.3" : "<",
        );
      });
    },
    { scope: sectionRef.current },
  );

  const stats = [
    {
      value: 7.96,
      label: "Total Value Locked",
      suffix: "B",
      prefix: "$",
      bg: "#FCC40A",
      height: 750,
    },
    {
      value: 13,
      label: "Stake Rewards",
      suffix: "%",
      bg: "#FCC40A",
      height: 792,
    },
    {
      value: 6,
      label: "Liquid Rewards",
      suffix: "%",
      bg: "#FCC40A",
      height: 750,
    },
    {
      value: 3,
      label: "Credit Card Cashback",
      suffix: "%",
      bg: "#FCC40A",
      height: 681,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className=" stats-cont text-black pt-[80px] flex gap-[12px] relative justify-center items-end overflow-hidden "
    >
      {stats.map((stat, idx) => {
        return (
          <div
            key={idx}
            className="stat-rect rounded-[64px] w-full max-w-[346px] flex flex-col justify-center items-center gap-[16px]"
            style={{ backgroundColor: stat.bg, height: stat.height }}
          >
            {/* Value */}
            <div className="text-[76px] font-bold leading-[100%] polymath">
              <span>{stat.prefix}</span>
              <span>{stat.value}</span>
              <span>{stat.suffix}</span>
            </div>

            {/* Label */}
            <div className="text-[38px] font-bold leading-[100%] text-center break-words max-w-[263px]">
              {stat.label}
            </div>
          </div>
        );
      })}
    </section>
  );
}
