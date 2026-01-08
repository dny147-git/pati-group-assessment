import React from "react"
import chart1Img from "../../assets/images/chart1.webp"
import modelImg from "../../assets/images/model.webp"
export default function DrainageSystem() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-4 mb-8 font-lora text-[32px] w-200 ">
        Your Hidden
        <span className="text-[#039869]"> Drainage</span> System
      </h2>
      {/* part1 */}
      <div className="flex items-center justify-center gap-25">
        {/* left */}
        <div className="w-[40%] text-[18px] font-nunito ">
          <p className="text-left mt-4">
            Your lymphatic system is your body's internal cleaning crew—a
            network of vessels that processes{" "}
            <strong>
              3-4 liters of cellular waste and excess fluid every single day.
              network of vessels that processes
            </strong>
          </p>
          <p className="text-left my-2">
            When it's working properly, you don't even know it exists.
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-center text-[#0c7c00] font-bold">
              <span className="">✓</span>
              <p>Waste gets drained away</p>
            </li>
            <li className="flex gap-2 items-center text-[#0c7c00] font-bold">
              <span className="">✓</span>
              <p>Fluid stays balanced.</p>
            </li>
            <li className="flex gap-2 items-center text-[#0c7c00] font-bold">
              <span className="">✓</span>
              <p>Your body feels light and energized.</p>
            </li>
          </ul>
          <div className="my-6 px-4 py-2 rounded-lg bg-[#ffe3e3] font-nunito">
            <p className="text-left">
              {" "}
              But after age 35, declining estrogen hijacks this system's ability
              to function.
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-center text-[#a60003] font-bold">
              <span className="">✘</span>
              <p>Vessel pumping weakens.</p>
            </li>
            <li className="flex gap-2 items-center text-[#a60003] font-bold">
              <span className="">✘</span>
              <p>One-way valves fail.</p>
            </li>
            <li className="flex gap-2 items-center text-[#a60003] font-bold">
              <span className="">✘</span>
              <p>Protein clogs form.</p>
            </li>
            <li className="flex gap-2 items-center text-[#a60003] font-bold">
              <span className="">✘</span>
              <p>Vessel walls become leaky.</p>
            </li>
          </ul>
          <p className="text-left my-2">
            Instead of processing and removing waste, it backs up in your
            tissues.
          </p>
        </div>

        {/* right */}
        <div className="w-[40%]">
          <img
            src={chart1Img}
            alt="chart1 img"
            className="w-[570px] h-[480px]"
          />
        </div>
      </div>
      {/* part 2 */}
      <div className="flex items-center justify-center gap-25">
        <div className="w-[40%]">
          <img src={modelImg} alt="chart1 img" className="w-142.5 h-95" />
        </div>
        <div className="w-[40%] text-[18px] font-nunito ">
          <p className="text-left">
            <strong> And it accumulates. Day after day. Week after week</strong>
          </p>
          <p className="text-left mt-2">
            That gallon of fluid your body should be draining every 24 hours?
            It's pooling in your stomach, your legs, your face—anywhere gravity
            and tissue structure allow it to settle.
          </p>

          <div className="my-6 px-4 py-2 rounded-lg bg-[#ffe3e3] font-nunito">
            <p className="text-left">
              {" "}
              The metabolic waste your cells produce overnight? It's still
              sitting there at noon. At dinner. While you're trying to fall
              asleep.
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center text-[#a60003] font-bold">
                <span className="">✘</span>
                <p>That's why you're bloated.</p>
              </li>
              <li className="flex gap-2 items-center text-[#a60003] font-bold">
                <span className="">✘</span>
                <p>That's why your ankles swell.</p>
              </li>
              <li className="flex gap-2 items-center text-[#a60003] font-bold">
                <span className="">✘</span>
                <p>That's why you see cellulite.</p>
              </li>
              <li className="flex gap-2 items-center text-[#a60003] font-bold">
                <span className="">✘</span>
                <p>That's why you feel exhausted and foggy.</p>
              </li>
            </ul>
          </div>

          <p className="text-left my-2">
            <strong>
              Your cells are literally sitting in their own waste—and your body
              can't flush it out.
            </strong>
          </p>
          <p className="text-left">
            The longer this goes on, the worse it gets. More congestion. More
            inflammation. More pressure on an already compromised system.
          </p>
        </div>
      </div>
    </div>
  )
}
