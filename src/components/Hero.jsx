import Spline from "@splinetool/react-spline";
import WhiteBtn from "./reusables/WhiteBtn";
import HeroClip from "./HeroClip";
import HeroClip2 from "./HeroClip2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core.js";

export default function Hero() {
  useGSAP(() => {
    gsap.to(".hero", {
      maskSize: "370px",
      scrollTrigger: {
        trigger: ".hero-trigger",
        start: "15% top",
        end: "96% bottom",
        scrub: true,
      },
    });
  });

  return (
    <>
      <div className="hero-trigger b h-[200vh] relative">
        <section className="hero z-[8] sticky top-0 h-[100vh] w-full py-[43px] pl-[37px] pr-[60px] flex items-end justify-center aspect-[1440/800] ">
          {/* Background image */}
          <img
            src="/hero-img.png"
            className="z-[2] absolute inset-0 w-full h-full object-cover"
            alt=""
          />

          {/* Container for typography */}
          <div className="flex overflow-hidden items-end justify-start gap-[80px] z-[5] relative text-white">
            <h1 className="text-[288px] font-bold leading-[80%] polymath">
              Ether.fi
            </h1>

            <div className="max-w-[400px]">
              <p className="text-[48px] font-bold polymath leading-[100%]">
                Save, Grow, Spend
              </p>
              <p className="text-[28px] font-medium leading-[120%] mt-[8px] text-white text-opacity-70">
                Our mission is to put you in charge of your crypto...
              </p>

              <WhiteBtn className="mt-[25px]">Start Earning</WhiteBtn>
            </div>
          </div>
        </section>
        {/* <HeroClip /> */}
        {/* <HeroClip2 /> */}
      </div>
    </>
  );
}
