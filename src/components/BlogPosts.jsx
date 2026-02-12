import React, { useRef } from "react";
import HoverCard3D from "./reusables/HoverCard3D";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function BlogPosts() {
  const posts = [
    {
      heading: "Introducing Ether.fi cash",
      body: "The non-custodial, cash back credit card you’ve been waiting for all this while in the world of ether",
      img: "/etherfi-cash.png",
    },
    {
      heading: "ETHFI Utility & Tokenomics",
      body: `The non-custodial, cash back credit card you’ve been waiting for all this while in the world of ether`,
      img: "/etherfi-utility.png",
    },
    {
      heading: "Staking is just the beginning",
      body: "The non-custodial, cash back credit card you’ve been waiting for all this while in the world of ether",
      img: "/staking.png",
    },
  ];

  return (
    <section className="pt-[140px] py-[110px] flex flex-col justify-center items-center">
      <h2 className="sub-heading">Blog Posts</h2>

      {/* Container for cards */}
      <div className="mt-[75px] flex gap-[32px] items-stretch justify-center">
        {posts.map((post) => {
          return <Card {...post} />;
        })}
      </div>
    </section>
  );
}

function Card({ heading, body, img }) {
  const imgRef = useRef(null);

  function scaleImg() {
    gsap.to(imgRef.current, {
      scale: 1.2,
    });
  }

  function unScaleImg() {
    gsap.to(imgRef.current, {
      scale: 1,
    });
  }

  return (
    <HoverCard3D
      mouseEnter={scaleImg}
      mouseLeave={unScaleImg}
      className="flex flex-col flex-1 items-stretch h-auto"
    >
      <div className="bg-[#202024] h-full flex flex-col flex-1 w-full max-w-[363px] rounded-[40px] p-[12px] pb-[40px]">
        {/* Container for image */}
        <div className="relative overflow-hidden w-full rounded-[24px]">
          <img
            ref={imgRef}
            src={img}
            className="w-full aspect-[338/253]"
            alt="posts"
          />
        </div>

        {/* Container for copy */}
        <div className="px-[16px] mt-[32px]">
          {/* heading */}
          <h3 className="font-[500] text-[24px] leading-[110%]">{heading}</h3>

          <p className="text-white text-opacity-50 text-[18px] mt-[15px] line-clamp-2">
            {body}
          </p>
        </div>
      </div>
    </HoverCard3D>
  );
}
