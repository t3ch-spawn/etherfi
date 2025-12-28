import React from "react";
import plant from "../assets/plant.svg";
import money_bag from "../assets/money_bag.svg";
import liquid from "../assets/liquid.svg";
import fashion_bag from "../assets/fashion_bag.svg";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const icons = [plant, liquid, money_bag, fashion_bag];

  return (
    <section className="min-h-[100vh] overflow-hidden relative bg-[#E4ECEB] py-[43px] pl-[37px] pr-[60px] flex flex-col justify-between ">
      {/* Container for icons */}
      <div className="flex justify-start items-center gap-[22px]">
        {icons.map((icon) => {
          return <img src={icon} alt="" />;
        })}
      </div>

      <div className="absolute spline-scene scale-[1.1] right-[100px] top-[100px] w-full max-w-[500px] aspect-[1/1]">
        <Spline scene="https://prod.spline.design/04z-n4EeFsrdnAwE/scene.splinecode" />
      </div>

      <div className="flex items-end justify-start gap-[80px]">
        <h1 className="text-[288px] font-bold leading-[80%] tracking-tighter">
          Ether.fi
        </h1>

        <div className="max-w-[400px]">
          <p className="text-[48px] font-bold leading-[100%] tracking-tighter">
            Save, Grow, Spend
          </p>
          <p className="text-[28px] font-medium leading-[120%] mt-[8px]">
            Our mission is to put you in charge of your crypto
          </p>
        </div>
      </div>
    </section>
  );
}
