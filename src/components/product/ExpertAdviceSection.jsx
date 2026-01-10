import React from "react"
import daysImg from "../../assets/images/60-days.webp"
import img from "../../assets/images/greendeskt-min.webp"
export default function ExpertAdviceSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center  my-4">
      {/* left */}
      <div className="w-full md:w-155 p-8 bg-[#f7f7f7] rounded-lg ">
        <p className="font-nunito text-[#737373]">July 4th, 2025</p>
        <h2 className="text-[24px] md:text-[32px] font-lora my-4 font-[400px]">
          Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic
        </h2>
        <p className="text-[18px] font-nunito">
          “Your nutrition plays a powerful role in your appearance. If your body
          is missing key vitamins and nutrients, it can’t process fat and upkeep
          healthy connective tissue, which is why unprocessed fat flows up and
          starts pushing up against your skin, forming bumps you know as
          cellulite.
        </p>
        <p className="text-[18px] font-nunito mt-2">
          SmoothSkin by Sculptique™ contains ingredients that are scientifically
          proven to enhance microcirculation, boost lymphatic drainage, and
          reduce inflammation, which restores your tissue and breaks down the
          fat cells in your skin.”
        </p>
        <div className="flex flex-col gap-2 mt-4 w-full  md:w-112.5">
          <button
            className="flex justify-center font-nunito py-5 px-20 cursor-pointer font-bold
                 text-white bg-black rounded-sm transition-all duration-200 hover:opacity-70 "
          >
            <a
              className="text-[16px] md:text-[18px]"
              href="https://pay.trysculptique.com/lymphatic/checkout"
              target="_blank"
            >
              {" "}
              Try Lymphatic Drainage Risk-Free
            </a>
          </button>
          <div className="my-4 flex gap-4 items-center justify-center font-nunito">
            <img
              src={daysImg}
              alt="60 days img"
              className="w-6 h-6 object-cover"
            />
            <p className="font-nunito">60-Day Money-Back Guarantee</p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="p-4">
        <img
          src={img}
          className="w-155 h-93.25 md:h-155 rounded-lg object-cover"
          alt="img"
        />
      </div>
    </div>
  )
}
