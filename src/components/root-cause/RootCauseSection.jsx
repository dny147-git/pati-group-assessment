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
import WhyNothingWorked from "./WhyNothingWorked"
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
    description: `That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.`,
  },
  {
    id: "r4",
    img: root4,
    description: `You feel foggy and exhausted even after a full night's sleep.`,
  },
  {
    id: "r5",
    img: root5,
    description: `You wake up stiff and achy, like your body aged overnight..`,
  },
]

export default function RootCauseSection() {
  return (
    <div className="py-14 mx-44  text-center flex flex-col items-center justify-center ">
      <h2 className="my-4 font-lora text-[32px] w-200">
        Why Your{" "}
        <span className="text-[#039869]">
          Bloating, Brain Fog & Swollen Legs
        </span>{" "}
        Are Actually Connected
      </h2>
      <p className="font-nunito text-lg text-center w-200">
        If you're experiencing more than one of these symptoms, your body is
        trying to tell you something:
      </p>
      {/* Root Causes container */}
      <div className="flex gap-4 items-center mt-8">
        {ROOT_CAUSES.map((cause) => {
          return (
            <RootCauseCard
              key={cause.id}
              img={cause.img}
              description={cause.description}
            />
          )
        })}
      </div>
      <img src={causeImg} className="w-230" alt="cause img" />
      <img
        src={chervonDownIcon}
        alt="chervon icon"
        className="w-12 h-16.25 my-4"
      />
      <div className="flex flex-col items-center">
        <h2 className="my-4 font-lora text-[32px] w-200">
          The Connection
          <span className="text-[#039869]"> You've Been Missing</span>{" "}
        </h2>
        <img
          src={connectImg}
          alt="connection img"
          className="w-230 object-cover"
        />
      </div>
      <img
        src={chervonDownIcon}
        alt="chervon icon"
        className="w-12 h-16.25 my-8"
      />
      <DrainageSystem />
    </div>
  )
}
