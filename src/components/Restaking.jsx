import React from "react";
import WhiteBtn from "./reusables/WhiteBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Restaking() {
  useGSAP(() => {
    jackedTextSequence(
      "staking-cont",
      "staking",
      "staking-text",
      "staking-btn",
    );
  });

  return (
    <div className="w-full max-w-[488px] staking-cont">
      <h1 className="sub-heading staking block">
        <span className="span-text">Put your assets to work </span> with the
        leading restaking platform.
      </h1>

      <p className="mt-[23px] staking-text text-white text-opacity-60 text-[20px]">
        Staking allows you keep exposure to ETH, BTC or stablecoins while giving
        you additional earnings and rewards. Secure, liquid and composable
        across DeFi
      </p>

      <WhiteBtn className="mt-[77px] staking-btn">Stake Now</WhiteBtn>
    </div>
  );
}

export function jackedTextSequence(container, heading, subText, btn) {
  document.fonts.ready.then(() => {
    SplitText.create(`.${subText}`, {
      type: "words",
      mask: "words",
      wordsClass: "wordAnim",
    });

    const headingSplit = SplitText.create(`.${heading}`, {
      type: "chars",
      charsClass: "charAnim",
      autoSplit: true,
      smartWrap: true
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${container}`,
          // markers: true,
          start: "top 50%",
          end: "bottom 50%",
          onLeave: () => {
            gsap.to(`.${container}`, { autoAlpha: 0 });
          },
          onLeaveBack: () => {
            gsap.to(`.${container}`, { autoAlpha: 0 });
          },
          onEnter: () => {
            gsap.to(`.${container}`, { autoAlpha: 1 });
          },
          onEnterBack: () => {
            gsap.to(`.${container}`, { autoAlpha: 1 });
          },
        },
      })
      // .from(`.${heading}`, { opacity: 0 })
      .to(
        `.${heading} .charAnim`,
        { color: "gray", stagger: 0.01, duration: 0.1 },
        "<",
      )
      .to(
        `.${heading} .charAnim`,
        { color: "#FFC23F", stagger: 0.01, duration: 0.1 },
        "<0.2",
      )
      .to(
        `.${heading} .charAnim`,
        { color: "white", stagger: 0.01, duration: 0.1 },
        "<0.1",
      )
      .to(
        `.${heading} .span-text .charAnim`,
        { color: "#FFC23F", duration: 0.7 },
        "<0.3",
      )
      .from(
        `.${subText} .wordAnim`,
        {
          y: "100%",
          ease: "power2.out",
          stagger: 0.026,
          duration: 0.7,
        },
        "<",
      )
      .from(
        `.${btn}`,
        {
          opacity: 0,
          y: 40,
          ease: "power2.out",
          duration: 0.7,
        },
        "<0.5",
      );
  });
}
