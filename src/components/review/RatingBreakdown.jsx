import { Stars } from "./RatingSummary"

const ratings = [
  { stars: 5, count: 84 },
  { stars: 4, count: 17 },
  { stars: 3, count: 8 },
  { stars: 2, count: 1 },
  { stars: 1, count: 0 },
]

const total = ratings.reduce((sum, r) => sum + r.count, 0)

export default function RatingBreakdown() {
  return (
    <div className="">
      {ratings.map((r) => (
        <div key={r.stars} className="flex items-center gap-x-3">
          <Stars rating={r.stars} />
          <div className="h-3.5 bg-gray-200 w-35 ">
            <div
              className="h-3.5 bg-[#FA8A8A]"
              style={{ width: `${(r.count / total) * 100}%` }}
            />
          </div>

          <span className="text-[12px] font-montserrat text-[#7b7b7b] w-6">
            {r.count}
          </span>
        </div>
      ))}
    </div>
  )
}
