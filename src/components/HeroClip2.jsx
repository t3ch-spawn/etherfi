import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function HeroClip2() {
  const clipRef = useRef(null);

  useGSAP(() => {
    // gsap.to(".hero-path", {
    //   scale: 1,
    //   x: "37%",
    //   y: "22%",
    //   scrollTrigger: {
    //     trigger: ".hero-trigger",
    //     start: "15% top",
    //     end: "96% bottom",
    //     scrub: true,
    //   },
    // });
    gsap.to(".hero-svg", {
      scale: 1,
      scrollTrigger: {
        trigger: ".hero-trigger",
        start: "bottom bottom",
        end: "+=800px",
        // pinSpacing: true,
        scrub: true,
        pin: true,
        pinnedContainer: ".hero",
        // markers: true,
      },
    });
  }, []);

  return (
    <svg
      //   viewBox="0 0 371 363"
      className="pointer-events-none scale-[40] hero-svg max-w-[370px] aspect-[370/363] absolute center-xy"
    >
      <path
        className="hero-path block origin-center "
        d="M101.207 4.76427L153.875 -5.44696e-06L178.956 39.0765L77.7489 268.404L31.6655 276.391L0 234.092L101.207 4.76427Z"
        fill="white"
      />
      <path
        className="hero-path block origin-center "
        d="M159.835 131.4L209.953 123.676L237.584 165.712L173.597 310.704L122.546 318.691L95.8476 276.391L159.835 131.4Z"
        fill="white"
      />
      <path
        className="hero-path block origin-center "
        d="M292.902 89.3635L346.083 84.1744L370.651 123.676L269.444 353.003L216.751 362.38L191.695 318.691L292.902 89.3635Z"
        fill="white"
      />
    </svg>
  );
}
