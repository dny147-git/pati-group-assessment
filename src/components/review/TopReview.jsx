import topReviewImg from "../../assets/images/topReviewImg.webp"
import verifedImg from "../../assets/images/verifed.avif"
import RatingImg from "../../assets/images/rating.png"
export default function TopReview() {
  return (
    <div className="w-full bg-[#f3eee0] p-3 mt-6 rounded-lg">
      {/* heading */}
      <div className="flex items-center gap-4">
        {" "}
        <img src={topReviewImg} className="w-18 h-18" alt="top review img" />
        <div className="font-nunito flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p>Margaret Ellison | FL </p>
            <img src={verifedImg} alt="" className="w-30 h-5 object-cover" />
          </div>
          <img src={RatingImg} className="w-25 h-4.5 object-cover" />
        </div>
      </div>
      {/* description */}
      <div className="my-2 font-nunito">
        <p className="mb-2 font-semibold">
          Even my husband noticed... the spark came back.
        </p>
        <p>
          After years of hiding under coverups, picking apart my body, and
          feeling disconnected, I finally feel at ease again. I feel less
          bloated, lighter, like my body is working with me not against me.
          These past months, I’ve been present. Even my marriage feels renewed,
          not just in how I look but in how I feel. It’s hard to explain, but
          once you try it you’ll get it. I’d recommend this to my closest
          friends without question.
        </p>
      </div>
    </div>
  )
}
