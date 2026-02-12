import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export default function RestakingCards() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".staking-cont",
          start: "top 40%",
          end: "bottom 50%",
          toggleActions: "play reverse play reverse",
        },
      })
      .from(".restaking-card-1, .restaking-card-2, .restaking-card-3", {
        opacity: 0,
        ease: "none",
      })
      .from(".restaking-card-1", {
        x: "80%",
        ease: "back.out(2)",
      })
      .from(
        ".restaking-card-2",
        {
          ease: "back.out(2)",
          scale: 1,
        },
        "<",
      )
      .from(
        ".restaking-card-3",
        {
          x: "-110%",
          ease: "back.out(2)",
        },
        "<",
      );
  });

  return (
    <div className="absolute right-0 translate-x-[10%] center-y flex justify-end items-center">
      <img
        src="/restaking-1.png"
        className="restaking-card-1 max-w-[302px] relative z-[1]"
        alt=""
      />
      <img
        src="/restaking-2.png"
        className="restaking-card-2 max-w-[302px] scale-[1.1] relative z-[3]"
        alt=""
      />
      <img
        src="/restaking-3.png"
        className="restaking-card-3 max-w-[302px] relative z-[2]"
        alt=""
      />
    </div>
  );
}
