import checkSvg from "../../assets/images/verified-checkmark.svg"
function StarFull() {
  return <span className="text-2xl text-[#FA8A8A]">★</span>
}

function StarEmpty() {
  return <span className="text-2xl text-gray-300">★</span>
}

function StarHalf() {
  return (
    <span className="relative inline-block text-2xl text-gray-300">
      ★
      <span
        className="absolute left-0 top-0 overflow-hidden text-[#FA8A8A]"
        style={{ width: "50%" }}
      >
        ★
      </span>
    </span>
  )
}

export function Stars({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => {
        const value = rating - i

        if (value >= 1) return <StarFull key={i} />
        if (value >= 0.5) return <StarHalf key={i} />
        return <StarEmpty key={i} />
      })}
    </div>
  )
}

export default function RatingSummary() {
  return (
    <div className="">
      <div className=" flex items-center gap-2">
        <Stars rating={4.5} />
        <p className="font-normal font-montserrat">4.67 out of 5</p>
      </div>
      <p className="text-left font-montserrat text-gray-500 flex items-center gap-2 ">
        Based on 110 reviews
        <img src={checkSvg} alt="checksvg" className="w-4.25 h-4.25" />
      </p>
    </div>
  )
}
