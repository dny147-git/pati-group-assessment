export default function WhyNothingWorkedCard({ title, description, img }) {
  return (
    <div
      className="
        w-full
        h-153.5
        flex flex-col
        bg-white
        rounded-lg
        overflow-hidden
      "
    >
      {/* IMAGE */}
      <img src={img} alt="x image" className="w-full h-65 object-cover" />

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-6 text-center">
        {/* TITLE */}
        <p
          className="font-triong text-[18px] lg:text-xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* DESCRIPTION BOX */}
        <div className="mt-6 px-4 py-3 rounded-lg bg-[#ffe3e3] font-nunito flex flex-col justify-center flex-1">
          <p>
            Why it failed <span className="text-[#a60003] font-bold">✘</span>
          </p>

          <p className="mt-3 font-bold text-center text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
