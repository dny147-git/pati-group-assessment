import WhyNothingWorkedCard from "./WhyNothingWorkedCard"
import x1Img from "../../assets/images/X1.jpg"
import x2Img from "../../assets/images/X2.webp"
import x3Img from "../../assets/images/X3.webp"
import missingPieceImg from "../../assets/images/missing-piece.webp"
import daysImg from "../../assets/images/60-days.webp"

const EXPLANATIONS = [
  {
    id: "1",
    title: `You cut out gluten, dairy, sugar. <br /> You ate clean for months.`,
    image: x1Img,
    description:
      "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
  },
  {
    id: "2",
    title: `You tried viral lymphatic drops from TikTok.`,
    image: x2Img,
    description:
      "They’re just pricey water with trace herbs. The active ingredients are destroyed by stomach acid and only act as a mild diuretic.",
  },
  {
    id: "3",
    title: `You got lymphatic massage or bought compression socks.`,
    image: x3Img,
    description:
      "Temporary manual movement. Within 24–48 hours, everything backed up again because your vessels still can't pump.",
  },
]

export default function WhyNothingWorked() {
  return (
    <section className="w-full bg-[#f7f2e7] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* TITLE */}
        <h2 className="font-lora text-[24px] md:text-[28px] lg:text-[32px] mb-8 text-center">
          Why Nothing Has
          <span className="text-[#039869]"> Worked</span>
        </h2>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            w-full
          "
        >
          {EXPLANATIONS.map((explanation) => (
            <WhyNothingWorkedCard
              key={explanation.id}
              title={explanation.title}
              description={explanation.description}
              img={explanation.image}
            />
          ))}
        </div>

        {/* IMAGE */}
        <div className="p-4">
          <img
            src={missingPieceImg}
            alt="missing-piece img"
            className="mt-12 h-55 w-full md:h-auto md:max-w-225 object-cover mb-8"
          />
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="https://pay.trysculptique.com/lymphatic/checkout"
            target="_blank"
            className="font-nunito text-[16px] lg:text-[18px] py-4 px-8 font-bold
                       text-white bg-black rounded-sm transition-opacity hover:opacity-70"
          >
            Try Lymphatic Drainage Risk-Free
          </a>

          <div className="flex gap-3 items-center font-nunito">
            <img
              src={daysImg}
              alt="60 days img"
              className="w-6 h-6 object-cover"
            />
            <strong>60 day money-back guarantee</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
