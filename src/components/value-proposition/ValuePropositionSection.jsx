import trustPilotImg from "../../assets/images/Trustpilot_review.webp"
import daysImg from "../../assets/images/60-days.webp"
import beforeMinImg from "../../assets/images/before-min_png.webp"
function CTA() {
  return (
    <div className="mt-4 lg:mt-8">
      <button
        className="w-full sm:w-auto font-nunito py-5 px-20 font-bold
        text-white bg-black rounded-sm transition-all duration-200 hover:opacity-70"
      >
        <a
          href="https://pay.trysculptique.com/lymphatic/checkout"
          target="_blank"
          className="text-[16px] lg:text-[18px]"
        >
          Try Lymphatic Drainage Risk-Free
        </a>
      </button>

      <div className="my-4 flex gap-4 items-center justify-center font-nunito">
        <img src={daysImg} className="w-6 h-6" alt="" />
        <p>60-Day Money-Back Guarantee</p>
      </div>
    </div>
  )
}
export default function ValuePropositionSection() {
  return (
    <section className="bg-[#f6f1e6] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16">
        {/* LEFT CONTENT */}
        <div>
          <img src={trustPilotImg} className="w-87.5 h-5 mb-6" alt="" />

          <h1 className="font-lora text-[24px] lg:text-[32px] mb-6">
            Stop Masking Symptoms. Start Restoring Root Cause.
          </h1>

          <div className="space-y-4 font-nunito text-lg">
            <p>
              You deserve to feel like yourself again. To wake up without
              puffiness. To see your ankles. To look in the mirror and recognize
              the vibrant woman staring back. To have energy for the people you
              love.
            </p>
            <p>
              You deserve a solution that actually works. Not temporary relief.
              Not symptom masking. Complete lymphatic restoration.
            </p>
          </div>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <CTA />
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={beforeMinImg}
            className="w-147 h-147 object-cover rounded-2xl"
            alt=""
          />
        </div>

        {/* CTA mobile – NẰM DƯỚI CÙNG */}
        <div className="lg:hidden">
          <CTA />
        </div>
      </div>
    </section>
  )
}
