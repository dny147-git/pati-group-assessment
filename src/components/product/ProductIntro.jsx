import bloodImg from "../../assets/images/blood.webp"
import ecologyImg from "../../assets/images/ecology.webp"
import populationImg from "../../assets/images/population.png"
import smileImg from "../../assets/images/smile.webp"
import stiffnessImg from "../../assets/images/stiffness.png"
import thighImg from "../../assets/images/thigh.webp"
import BenefitsSection from "./BenefitsSection"
import Rating from "./Rating"

const BENEFITS = [
  {
    id: "b1",
    img: populationImg,
    title: "Join over 93 Thousand who say - it WORKS!",
  },
  {
    id: "b2",
    img: bloodImg,
    title: "Restores your body’s natural 24-hour lymphatic cycle",
  },
  {
    id: "b3",
    img: thighImg,
    title:
      "Helps reduce fluid retention and the appearance of puffiness and bloating",
  },
  {
    id: "b4",
    img: smileImg,
    title: "Helps fall asleep faster, stay asleep longer and wake up energized",
  },
  {
    id: "b5",
    img: stiffnessImg,
    title:
      "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
  },
  {
    id: "b6",
    img: ecologyImg,
    title: "Boosts energy, mental clarity and emotional balance",
  },
]

export default function ProductIntro() {
  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-[580px]">
      {/* Rating */}
      <Rating />

      {/* Title */}
      <h1
        className="
          font-lora
          text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px]
          leading-snug
          font-normal
          my-4
        "
      >
        New Maximum Potency Formula – Lymphatic Drainage Capsules by Sculptique™
      </h1>

      {/* Benefits */}
      <BenefitsSection benefits={BENEFITS} />
    </div>
  )
}
