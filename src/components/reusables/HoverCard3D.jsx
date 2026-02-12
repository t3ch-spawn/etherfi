import gsap from "gsap";
import React, { useRef } from "react";

export default function HoverCard3D({ children, mouseEnter, mouseLeave, className }) {
  const tweenRef = useRef(null);
  function transformCard(e) {
    const rectElement = e.currentTarget.querySelector(".hover-card");
    const rect = rectElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / 400) * 10;
    const yPercent = (y / 400) * 10;

    const normalize = (value, oldMin, oldMax, newMin, newMax) => {
      return (
        ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin
      );
    };

    let xDeg = normalize(xPercent, 0, 10, -23.5, 23.5).toFixed(2);
    let yDeg = normalize(yPercent, 0, 10, -11.5, 11.5).toFixed(2);

    if (tweenRef.current) {
      tweenRef.current.kill();
    }

    tweenRef.current = gsap.to(rectElement, {
      rotateX: -yDeg,
      rotateY: xDeg,
    });
  }

  function resetCard(e) {
    const rectElement = e.currentTarget.querySelector(".hover-card");

    gsap.to(rectElement, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
    });
  }

  return (
    <div
      onMouseMove={transformCard}
      onMouseLeave={(e)=>{
        resetCard(e)

        if(mouseLeave){
          mouseLeave()
        }
      }}
      onMouseEnter={() => {
        if (mouseEnter) {
          mouseEnter();
        }
      }}
      className={`hover-card-cont ${className}`}
    >
      <div className="hover-card flex flex-col h-full">{children}</div>
    </div>
  );
}
