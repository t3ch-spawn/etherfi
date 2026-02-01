import React from "react";
import WhiteBtn from "./reusables/WhiteBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { jackedTextSequence } from "./Restaking";

export default function Defi_Integrations() {
  useGSAP(() => {
    jackedTextSequence(
      "defi-integrate-cont",
      "defi-integrate",
      "integrate-text",
      "integrate-btn",
    );
  });

  return (
    <div className=" w-full max-w-[488px] defi-integrate-cont">
      <h2 className="sub-heading defi-integrate max-w-[467px]">
        {" "}
        <span className="span-text">Over 400 integrations </span> across DeFi. <br />
        Use it everywhere.
      </h2>

      <p className="mt-[23px] integrate-text text-white text-opacity-60 text-[20px]">
        With over 400 integrations across DeFi and centralized exchanges with
        rewards when you trade, lend or leverage across the ecosystem
      </p>

      <WhiteBtn className="mt-[77px] integrate-btn">Stake Now</WhiteBtn>
    </div>
  );
}
