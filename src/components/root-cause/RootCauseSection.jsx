import React from "react"
import RootCauseCard from "./RootCauseCard"
import root1 from "../../assets/images/root1.webp"
import root2 from "../../assets/images/root2.webp"
import root3 from "../../assets/images/root3.webp"
import root4 from "../../assets/images/root4.webp"
import root5 from "../../assets/images/root5.webp"
import causeImg from "../../assets/images/Group_7207.webp"
import chervonDownIcon from "../../assets/images/chervon-down.png"
import connectImg from "../../assets/images/missingConnection.webp"
import DrainageSystem from "./DrainageSystem"

const ROOT_CAUSES = [
  {
    id: "r1",
    img: root1,
    description:
      "Your stomach is flat in the morning, but by evening you look six months pregnant.",
  },
  {
    id: "r2",
    img: root2,
    description: 'Your ankles disappear into "kankles" by the end of the day.',
  },
  {
    id: "r3",
    img: root3,
    description:
      "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
  },
  {
    id: "r4",
    img: root4,
    description:
      "You feel foggy and exhausted even after a full night's sleep.",
  },
  {
    id: "r5",
    img: root5,
    description: "You wake up stiff and achy, like your body aged overnight.",
  },
]

export default function RootCauseSection() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 pt-12 md:py-16 lg:py-20 text-center flex flex-col items-center">
        {/* TITLE */}
        <h2 className="my-4 font-lora text-[24px] sm:text-[26px] md:text-[30px] lg:text-[32px] leading-snug max-w-4xl">
          Why Your{" "}
          <span className="text-[#039869]">
            Bloating, Brain Fog & Swollen Legs
          </span>{" "}
          Are Actually Connected
        </h2>

        <p className="font-nunito text-[15px] sm:text-[16px] lg:text-lg max-w-3xl mt-2">
          If you're experiencing more than one of these symptoms, your body is
          trying to tell you something:
        </p>

        {/* ROOT CAUSES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10 w-full">
          {ROOT_CAUSES.map((cause) => (
            <RootCauseCard
              key={cause.id}
              img={cause.img}
              description={cause.description}
            />
          ))}
        </div>

        {/* CAUSE IMAGE */}
        <img
          src={causeImg}
          alt="cause img"
          className="w-full max-w-5xl mt-12 object-contain"
        />

        {/* CHEVRON */}
        <img
          src={chervonDownIcon}
          alt="chevron icon"
          className="w-10 h-auto my-6 md:my-8"
        />

        {/* CONNECTION */}
        <div className="flex flex-col items-center">
          <h2 className="my-4 font-lora text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] leading-snug max-w-4xl">
            The Connection
            <span className="text-[#039869]"> You've Been Missing</span>
          </h2>

          <img
            src={connectImg}
            alt="connection img"
            className="w-105 md:w-full max-w-5xl object-cover mt-4"
          />
        </div>

        {/* CHEVRON */}
        <img
          src={chervonDownIcon}
          alt="chevron icon"
          className="w-10 h-auto my-8"
        />
      </div>

      {/* NEXT SECTION */}
      <DrainageSystem />
    </section>
  )
}
