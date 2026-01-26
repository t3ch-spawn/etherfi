import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function HeroClip() {
  const clipRef = useRef(null);

  useGSAP(() => {
    gsap.to(".hero-path", {
      scale: 1,
      x: "37vw",
      y: "22vh",
      scrollTrigger: {
        trigger: ".hero-trigger",
        start: "15% top",
        end: "96% bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <svg
      viewBox="0 0 371 363"
      className="pointer-events-none  fixed top-0 w-full h-full inset-0 flex justify-center items-center"
    >
      <clipPath
        ref={clipRef}
        className=""
        id="hero-clip"
        clipPathUnits=""
      >
        <path
          className="hero-path block translate-x-[37vw] translate-y-[22vh] scale-[25] origin-center "
          d="M101.207 4.76427L153.875 -5.44696e-06L178.956 39.0765L77.7489 268.404L31.6655 276.391L0 234.092L101.207 4.76427Z"
          fill="#D9D9D9"
        />
        <path
          className="hero-path block translate-x-[37vw] translate-y-[22vh] scale-[25] origin-center "
          d="M159.835 131.4L209.953 123.676L237.584 165.712L173.597 310.704L122.546 318.691L95.8476 276.391L159.835 131.4Z"
          fill="#D9D9D9"
        />
        <path
          className="hero-path block translate-x-[37vw] translate-y-[22vh] scale-[25] origin-center "
          d="M292.902 89.3635L346.083 84.1744L370.651 123.676L269.444 353.003L216.751 362.38L191.695 318.691L292.902 89.3635Z"
          fill="#D9D9D9"
        />
      </clipPath>
    </svg>
  );
}
