import React from "react";
import WhiteBtn from "./reusables/WhiteBtn";
import RippleImg from "./reusables/RippleImg";

export default function EarlyAccess() {
  const tags = [
    "Reward boosts, exclusive to members",
    "Crypto event tickets and lounge access",
    "Global transfers with IBAN/SWIFT integrations",
    "Luxury hotel discounts of up to 65%",
    "Concierge services and more!",
  ];

  return (
    <section className="early-access-gradient py-[146px] flex justify-center items-center gap-[160px]">
      {/* Container for content */}
      <div className="max-w-[533px] flex flex-col gap-[37px]">
        <h2 className="sub-heading text-black">
          Get early access to membership rewards
        </h2>

        {/* Container for tags */}
        <div className="flex flex-col w-full gap-[8px]">
          {tags.map((tag) => {
            return (
              <div className="flex gap-[16px] px-[20px] py-[22px] rounded-[24px] reward-tag">
                <img src="/reward-badge.svg" alt="" />
                <p className="text-[18px]">{tag}</p>
              </div>
            );
          })}
        </div>

        {/* Container for cta */}
        <div>
          <WhiteBtn>Signup for access</WhiteBtn>
        </div>
      </div>

      {/* Container for giftbox */}
      <div className="w-[250px] aspect-[250/400]">
      </div>
    </section>
  );
}
