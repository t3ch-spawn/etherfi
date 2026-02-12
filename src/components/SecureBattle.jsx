import React from "react";
import WhiteBtn from "./reusables/WhiteBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { jackedTextSequence } from "./Restaking";

export default function SecureBattle() {
  useGSAP(() => {
    jackedTextSequence(
      "secure-battle-cont",
      "sec-battle",
      "sec-battle-text",
      "sec-battle-btn",
    );

    gsap.from(".sec-battle-card", {
      yPercent: 50,
      opacity: 0,
      ease: "back.out(2)",
      stagger: -0.2,
      scrollTrigger: {
        trigger: ".secure-battle-cont",
        start: "top 40%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <div className=" w-full max-w-[488px] secure-battle-cont">
      <h2 className="sub-heading sec-battle max-w-[394px]">
        {" "}
        <span className="span-text">Secure and </span> battle-tested.
      </h2>

      <p className="mt-[23px] sec-battle-text text-white text-opacity-60 text-[20px]">
        Enjoy rewards while keeping your assets secure, audited and monitored by
        industry-leading firms
      </p>

      <WhiteBtn className="mt-[77px] sec-battle-btn">Stake Now</WhiteBtn>
    </div>
  );
}
