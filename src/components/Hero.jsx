import Spline from "@splinetool/react-spline";
import WhiteBtn from "./reusables/WhiteBtn";
import HeroClip from "./HeroClip";

export default function Hero() {
  return (
    <>
      <div className="h-[300vh] hero-trigger">
        <section className="hero sticky top-0 min-h-[100vh] overflow-hidden py-[43px] pl-[37px] pr-[60px] flex items-end ">
          {/* Background image */}
          <img
            src="/hero-img.png"
            className="z-[2] absolute inset-0 w-full h-full object-cover"
            alt=""
          />

          {/* Container for typography */}
          <div className="flex items-end justify-start gap-[80px] z-[5] relative text-white">
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

          <HeroClip />
        </section>
      </div>
    </>
  );
}
