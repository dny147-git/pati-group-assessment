import StoriesSlider from "./StoriesSlider"
import trustPilot from "../../assets/images/trust-pilot.webp"
export default function StoriesSection() {
  return (
    <section className="bg-[#F6F1E5] py-20 my-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          {" "}
          <img src={trustPilot} alt="trustPilot" className="w-75 h-11" />
        </div>
        <h2 className="text-[24px] px-2 text-center md:text-[32px] font-lora mb-10">
          See The Stories of Sculptique™ Women Firsthand
        </h2>
        <StoriesSlider />
        <button className="mt-12 bg-black text-white px-10 py-4 rounded">
          Try Lymphatic Drainage Risk-Free
        </button>
        <p className="mt-4 text-sm text-gray-700">
          60-Day Money-Back Guarantee
        </p>
      </div>
    </section>
  )
}
