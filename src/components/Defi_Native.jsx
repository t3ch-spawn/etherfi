import React from "react";
import HoverCard3D from "./reusables/HoverCard3D";
import WhiteBtn from "./reusables/WhiteBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Defi_Native() {
  useGSAP(() => {
    gsap.to(".word-marquee", {
      x: "-100%",
      duration: 8,
      ease: "none",
      repeat: -1,
    });
  });

  return (
    <section className="pt-[163px] pb-[180px]">
      {/* Container for copy and credit card */}
      <div className="flex max-w-[1152px] mx-auto justify-between items-center">
        {/* Container for copy */}
        <div className="max-w-[503px]">
          {/* Heading */}
          <h2 className="sub-heading">
            A DeFi-native credit card, accepted worldwide
          </h2>

          {/* Body */}
          <p className="text-white text-[20px] text-opacity-60 leading-[150%] mt-[22px]">
            Connect your ether.fi portfolio to spend with your card. Buy a
            coffee, rent a car or book your next hotel stay–at over 100 million
            locations.
          </p>

          {/* Container for btn and word marquee */}
          <div className="mt-[37px] flex justify-start items-center gap-[24px]">
            <WhiteBtn>Get your card</WhiteBtn>

            {/* Word marquee */}
            <div className=" flex w-fit overflow-hidden relative">
              <img
                src="/mask-group.png"
                alt=""
                className="w-full h-full inset-0 absolute z-[3]"
              />
              <p className="word-marquee min-w-fit whitespace-nowrap pl-[6px]">
                3% cashback on all purchases, all card levels. Until December
                31.
              </p>
              <p className="word-marquee min-w-fit whitespace-nowrap pl-[6px]">
                3% cashback on all purchases, all card levels. Until December
                31.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-[420px] w-full aspect-[420/265] relative credit-card-cont">
          <img
            className="absolute w-full h-full object-cover"
            src="/green-card.svg"
            alt=""
          />
          <img
            className="absolute w-full h-full object-cover"
            src="/green-card.svg"
            alt=""
          />
          <img
            className="absolute w-full h-full object-cover"
            src="/green-card.svg"
            alt=""
          />
        </div>
      </div>

      {/* Container for info pills */}
      <div className="mx-auto gap-[20px] flex justify-center items-center mt-[100px]">
        <Pill
          heading={<img src="/g-apple-pay.svg" className="mr-[8px]" alt="g-apple-pay" />}
          body="Supported"
        />
        <Pill heading="3%" body="Cashback on all purchases *" />
        <Pill heading="100M+" body="Locations worldwide" />
      </div>
    </section>
  );
}

function Pill({ heading, body }) {
  return (
    <div className="bg-[#1F1F23] h-[76px] rounded-[24px] w-full max-w-[370px] flex justify-center items-center gap-[16px] px-[20px]">
      {/* Heading */}
      <div className="text-[40px] font-bold polymath">{heading}</div>

      <p className="text-[18px] text-white text-opacity-60">{body}</p>
    </div>
  );
}
