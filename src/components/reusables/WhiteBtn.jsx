import React from "react";

export default function WhiteBtn({ children, className }) {
  return (
    <button className={`flex justify-center text-[18px] font-semibold items-center w-full max-w-[191px] bg-white rounded-[24px] h-[52px] text-black ${className}`}>
      {children}
    </button>
  );
}
