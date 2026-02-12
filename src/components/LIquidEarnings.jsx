import React from "react";
import HoverCard3D from "./reusables/HoverCard3D";

export default function LIquidEarnings() {
  const cards = [
    {
      heading: "Deposit Assets",
      body: `There’s a vault for everyone on the planet. Maximize your earnings`,
      icon: "/vault.svg",
    },
    {
      heading: "Auto-balance",
      body: `Liquid vaults will deploy strategy to optimize for earnings and rewards`,
      icon: "/stones.svg",
    },
    {
      heading: "Earn rewards",
      body: `All your earnings are auto-compounded. Withdraw or transfer at anytime`,
      icon: "/earn-reward.svg",
    },
  ];
  return (
    <section className="pt-[162px] text-white flex flex-col justify-center items-center pb-[90px]">
      <h2 className="sub-heading max-w-[618px] text-center">
        Liquid puts your earnings on auto-pilot
      </h2>

      {/* Container for cards */}
      <div className="mt-[75px] flex justify-center items-center gap-[32px]">
        {cards.map((card, idx) => {
          return <Card key={idx} {...card} />;
        })}
      </div>
    </section>
  );
}

function Card({ heading, body, icon }) {
  return (
    <HoverCard3D>
      <div className="flex flex-col items-center justify-center text-center bg-[#1F1F23] max-w-[362px] px-[40px] pt-[47px] pb-[43px] rounded-[48px]">
        <h3 className="text-[32px] leading-[110%] font-bold polymath">{heading}</h3>

        <p className="text-white text-opacity-60 text-[20px] leading-[140%] mt-[23px]">
          {body}
        </p>

        <img className="mt-[53px]" src={icon} alt="icon" />
      </div>
    </HoverCard3D>
  );
}
