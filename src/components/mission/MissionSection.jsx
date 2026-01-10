import missionRightImg from "../../assets/images/mission-right.webp"
import numbDeskt from "../../assets/images/numbdeskt-min_png.webp"

export default function MissionSection() {
  return (
    <section className="my-14 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-center">
        {/* LEFT */}
        <div className="w-full lg:w-182.5 px-0 lg:px-8 text-center lg:text-left">
          <h2 className="text-[24px] text-center md:text-left md:text-[28px] lg:text-[32px] font-lora leading-tight">
            We’re On A Mission To Help 100,000,000 Women Visibly, Naturally Get
            Rid Of Bloating…And Feel Like Themselves Again
          </h2>

          <p className="text-[16px] lg:text-[18px] font-nunito my-4">
            Here's where we're at right now:
          </p>

          <img
            src={numbDeskt}
            alt=""
            className="w-full max-w-[665px] mx-auto lg:mx-0"
          />
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[510px] flex justify-center">
          <img
            src={missionRightImg}
            alt=""
            className="w-full max-w-[510px] h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  )
}
