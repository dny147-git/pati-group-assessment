import React from "react"
import chart1Img from "../../assets/images/chart1.webp"
import modelImg from "../../assets/images/model.webp"

export default function DrainageSystem() {
  return (
    <section className="w-full pb-12 md:pb-16 lg:pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* TITLE */}
        <h2
          className="
            my-4 mb-10
            font-lora
            text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px]
            leading-snug
            text-center
          "
        >
          Your Hidden
          <span className="text-[#039869]"> Drainage</span> System
        </h2>

        {/* PART 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 lg:gap-12 mb-16">
          {/* TEXT */}
          <div className="w-full lg:w-1/2 font-nunito text-[16px] lg:text-[18px] leading-relaxed space-y-4">
            <p>
              Your lymphatic system is your body's internal cleaning crew—a
              network of vessels that processes{" "}
              <strong>
                3–4 liters of cellular waste and excess fluid every single day.
              </strong>
            </p>

            <p>When it's working properly, you don't even know it exists.</p>

            <ul className="space-y-2">
              {[
                "Waste gets drained away",
                "Fluid stays balanced",
                "Your body feels light and energized",
              ].map((text) => (
                <li
                  key={text}
                  className="flex gap-2 items-center text-[#0c7c00] font-semibold sm:font-bold"
                >
                  ✓ <span className="font-normal">{text}</span>
                </li>
              ))}
            </ul>

            <div className="my-6 px-4 py-3 sm:px-5 sm:py-4 rounded-lg bg-[#ffe3e3]">
              <p>
                But after age 35, declining estrogen hijacks this system's
                ability to function.
              </p>
            </div>

            <ul className="space-y-2">
              {[
                "Vessel pumping weakens",
                "One-way valves fail",
                "Protein clogs form",
                "Vessel walls become leaky",
              ].map((text) => (
                <li
                  key={text}
                  className="flex gap-2 items-center text-[#a60003] font-semibold sm:font-bold"
                >
                  ✘ <span className="font-normal">{text}</span>
                </li>
              ))}
            </ul>

            <p>
              Instead of processing and removing waste, it backs up in your
              tissues.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={chart1Img}
              alt="Lymphatic drainage chart"
              className="
                w-full
                max-w-90 sm:max-w-105 md:max-w-120 lg:max-w-130
                h-auto
                object-contain
              "
            />
          </div>
        </div>

        {/* PART 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={modelImg}
              alt="Fluid accumulation model"
              className="
                w-full
                max-w-[360px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px]
                h-auto
                object-contain
              "
            />
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2 font-nunito text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed space-y-4">
            <p>
              <strong>
                And it accumulates. Day after day. Week after week.
              </strong>
            </p>

            <p>
              That gallon of fluid your body should be draining every 24 hours?
              It's pooling in your stomach, legs, face—anywhere gravity allows.
            </p>

            <div className="my-6 px-4 py-3 sm:px-5 sm:py-4 rounded-lg bg-[#ffe3e3]">
              <p>
                The metabolic waste your cells produce overnight? It's still
                sitting there at noon.
              </p>

              <ul className="mt-3 space-y-2">
                {[
                  "That's why you're bloated",
                  "That's why your ankles swell",
                  "That's why you see cellulite",
                  "That's why you feel exhausted and foggy",
                ].map((text) => (
                  <li
                    key={text}
                    className="flex gap-2 items-center text-[#a60003] font-semibold sm:font-bold"
                  >
                    ✘ <span className="font-normal">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              <strong>
                Your cells are literally sitting in their own waste—and your
                body can't flush it out.
              </strong>
            </p>

            <p>
              The longer this goes on, the worse it gets. More congestion. More
              inflammation. More pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
