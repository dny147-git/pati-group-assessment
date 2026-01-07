import React from "react"
import Hero from "../../assets/images/hero.webp"
import Nysale from "../../assets/images/nysale.avif"
import LeavesIcon from "../../assets/images/leaves.png"
export default function ProductImage() {
  return (
    <div className="relative">
      <img
        src={Hero}
        alt=""
        hero
        className="w-[588px] h-[588px] object-cover rounded-lg"
      />
      <img
        src={Nysale}
        alt="new-year=sale"
        className="w-[120px] h-[120px] object-cover absolute top-3.5 right-3"
      />
      <button
        className="py-2 px-6 bg-[#ffffffd9] absolute z-2 bottom-[32px] 
      left-[50%] -translate-x-[50%] max-w-[290px] flex justify-center items-center gap-2 outline-none rounded-3xl cursor-pointer"
      >
        <img
          src={LeavesIcon}
          alt="leaves icon"
          className="w-6 h-6 object-cover"
        />
        <span className="font-montserrat text-sm leading-[1.2px]">
          Nutritional Information
        </span>
      </button>
    </div>
  )
}
