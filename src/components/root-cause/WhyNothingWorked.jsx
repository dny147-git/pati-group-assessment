import WhyNothingWorkedCard from "./WhyNothingWorkedCard"
import x1Img from "../../assets/images/X1.jpg"
import x2Img from "../../assets/images/X2.webp"
import x3Img from "../../assets/images/X3.webp"
import missingPieceImg from "../../assets/images/missing-piece.webp"
import daysImg from "../../assets/images/60-days.webp"
const EXPLANATIONS = [
  {
    id: "1",
    title: `    You cut out gluten, dairy, sugar. <br />
          You ate clean for months.`,
    image: x1Img,
    description: `Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.`,
  },
  {
    id: "2",
    title: `You tried viral lymphatic drops from TikTok.`,
    image: x2Img,

    description: `They’re just pricey water with trace herbs. The “active ingredients” are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.`,
  },
  {
    id: "3",
    title: `You got lymphatic massage or bought compression socks.`,
    image: x3Img,

    description: `Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.`,
  },
]
export default function WhyNothingWorked() {
  return (
    <div className="w-full bg-[#f7f2e7] flex flex-col justify-center items-center pb-17.5">
      <h2 className="font-lora text-[32px] mb-4">
        Why Nothing Has
        <span className="text-[#039869]"> Worked</span>{" "}
      </h2>
      <div className="flex items-center gap-4">
        {EXPLANATIONS.map((explanation) => {
          return (
            <WhyNothingWorkedCard
              key={explanation.id}
              title={explanation.title}
              description={explanation.description}
              img={explanation.image}
            />
          )
        })}
      </div>
      <img
        src={missingPieceImg}
        className="w-230 object-cover mb-6"
        alt="missing-piece img"
      />
      <div className="flex flex-col gap-2">
        <button
          className="flex items-center font-nunito py-5 px-20 cursor-pointer font-bold
         text-white bg-black rounded-sm transition-all duration-200 hover:opacity-70 "
        >
          <a
            className="text-[18px]"
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
          <strong>60 day money-back guarantee</strong>
        </div>
      </div>
    </div>
  )
}
