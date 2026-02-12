import React from "react";

export default function SecBattleCards() {
  return (
    <div className="max-w-[630px] w-full aspect-[630/567] absolute right-[5%] translate-x-[5%] bottom-0">
      <img
        className="absolute w-full aspect-[631/310] sec-battle-card"
        src="/open-sourced.png"
        alt=""
      />
      <img
        className="absolute w-full aspect-[631/322] mt-[120px] sec-battle-card"
        src="/decentralized.png"
        alt=""
      />
      <img
        className="absolute w-full aspect-[631/340] mt-[240px] sec-battle-card"
        src="/protected.png"
        alt=""
      />
    </div>
  );
}
