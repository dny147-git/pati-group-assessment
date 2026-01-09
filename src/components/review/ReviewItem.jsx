import ReviewHeader from "./ReviewHeader"
import ReviewContent from "./ReviewContent"
import ReviewMeta from "./ReviewMeta"
import { Stars } from "./RatingSummary"

export default function ReviewItem({ review }) {
  return (
    <div className="py-8">
      <div className="flex justify-between items-start mb-3">
        <Stars rating={review.rating} />
        <span className="text-[12px] font-montserrat text-[#7b7b7b]">
          {review.date}
        </span>
      </div>

      <ReviewHeader name={review.name} verified={review.verified} />
      <ReviewContent content={review.content} />
      <ReviewMeta />
    </div>
  )
}
