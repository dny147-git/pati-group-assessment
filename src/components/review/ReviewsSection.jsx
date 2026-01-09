import ReviewsHeader from "./ReviewsHeader"
import RatingSummary from "./RatingSummary"
import RatingBreakdown from "./RatingBreakdown"
import WriteReviewButton from "./WriteReviewButton"
import diadmondSvg from "../../assets/images/diamond.svg"
export default function ReviewsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 text-center">
      <ReviewsHeader />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-center">
        <RatingSummary />
        <RatingBreakdown />
        <WriteReviewButton />
      </div>

      <div className="mt-16 flex justify-center">
        <img src={diadmondSvg} className="w-20 h-20 object-cover" alt="" />
      </div>
    </section>
  )
}
