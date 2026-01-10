import React from "react"
import numbDeskt from "../../assets/images/numbdeskt-min_png.webp"
import missionRightImg from "../../assets/images/mission-right.webp"
export default function MissionSection() {
  return (
    <div className="flex my-14 justify-center gap-4">
      {/* left */}
      <div className="w-182.5 px-8">
        <h2 className="text-[32px] font-lora">
          We’re On A Mission To Help 100,000,000 Women Visibly, Naturally Get
          Rid Of Bloating…And Feel Like Themselves Again
        </h2>
        <p className="text-[18px] font-nunito my-3">
          Here's where we're at right now:
        </p>
        <img src={numbDeskt} className="w-166.25" alt="" />
      </div>
      {/* right */}
      <div className="">
        <img
          src={missionRightImg}
          className="w-127.5 h-95 object-cover"
          alt=""
        />
      </div>
    </div>
  )
}
