import React from "react"
import Hero from "../../assets/images/hero.webp"
import Nysale from "../../assets/images/nysale.avif"
import LeavesIcon from "../../assets/images/leaves.png"

export default function ProductImage() {
  return (
    <div className="relative w-full md:max-w-125 lg:max-w-147 mx-auto">
      {/* MAIN IMAGE */}
      <div className="w-full aspect-square overflow-hidden rounded-lg">
        <img
          src={Hero}
          alt="Product hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* SALE BADGE */}
      <img
        src={Nysale}
        alt="new year sale"
        className="
          absolute
          top-3 right-3
          w-16 h-16
          sm:w-20 sm:h-20
          lg:w-30 lg:h-30
          object-cover
        "
      />

      {/* INFO BUTTON */}
      <button
        className="
          absolute
          bottom-4 sm:bottom-6 lg:bottom-8
          left-1/2 -translate-x-1/2
          bg-white/90
          backdrop-blur
          py-2 px-4 sm:px-6
          rounded-3xl
          flex items-center gap-2
          shadow-md
          hover:bg-white
          transition
        "
      >
        <img
          src={LeavesIcon}
          alt="leaves icon"
          className="w-5 h-5 sm:w-6 sm:h-6 object-cover"
        />
        <span className="font-montserrat text-xs sm:text-sm leading-tight">
          Nutritional Information
        </span>
      </button>
    </div>
  )
}
