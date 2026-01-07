import RatingImg from "../../assets/images/rating.png"
export default function Rating() {
  return (
    <div className="flex items-center gap-4">
      <img src={RatingImg} className="w-25 h-4.5 object-cover" />
      <p className="font-nunito">4.8/5 Excellent | Based on 2381 Reviews</p>
    </div>
  )
}
