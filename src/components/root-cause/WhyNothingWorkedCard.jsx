export default function WhyNothingWorkedCard({ title, description, img }) {
  return (
    <div className="flex flex-col">
      <img
        src={img}
        alt="x image"
        className="w-100 h-82.5 object-cover rounded-t-lg"
      />
      <div className="p-6 text-center bg-white w-100 ">
        <p
          className="font-triong text-xl"
          dangerouslySetInnerHTML={{ __html: title }}
        ></p>
        <div className="my-6 px-4 py-2 h-45 rounded-lg bg-[#ffe3e3] font-nunito">
          <p>
            Why it failed <span className="text-[#a60003] font-bold">✘</span>
          </p>
          <p className="mt-3 font-bold text-center"> {description}</p>
        </div>
      </div>
    </div>
  )
}
