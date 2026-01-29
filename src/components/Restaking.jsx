import React from "react";
import WhiteBtn from "./reusables/WhiteBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Restaking() {
  useGSAP(() => {
    gsap.from(".staking", {
      opacity: 0,
      y: "20%",
      stagger: 0.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".staking-cont",
        // markers: true,
        start: "top 50%",
      },
    });
  });

  return (
    <div className="absolute center-xy w-full max-w-[488px] staking-cont">
      <h2 className="sub-heading staking">
        {" "}
        <span className="text-gold">Put your assets to work</span> with the
        leading restaking platform.
      </h2>

      <p className="mt-[23px] staking">
        Staking allows you keep exposure to ETH, BTC or stablecoins while giving
        you additional earnings and rewards. Secure, liquid and composable
        across DeFi
      </p>

      <WhiteBtn className="mt-[77px] staking">Stake Now</WhiteBtn>
    </div>
  );
}
