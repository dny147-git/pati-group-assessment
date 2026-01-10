export default function RootCauseCard({ img, description }) {
  return (
    <div className="flex flex-row md:flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm">
      {/* IMAGE */}
      <div className=" md:w-full aspect-4/3">
        <img
          src={img}
          alt="root cause"
          className="w-57 h-44 md:w-full md:h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="flex-1 bg-[#f7f7f7] flex items-center justify-center p-4 sm:p-5">
        <p className="font-nunito text-[14px] sm:text-[15px] text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
