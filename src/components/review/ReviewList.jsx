import ReviewItem from "./ReviewItem"
import ReviewSortDropdown from "./ReviewSortDropdown"
import ReviewsPagination from "./ReviewsPagination"

const reviews = [
  {
    id: 1,
    name: "Anonymous",
    verified: true,
    rating: 5,
    date: "12/08/2025",
    content:
      "Pretty sure I’m seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it’s working.",
  },
  {
    id: 2,
    name: "Anonymous",
    verified: true,
    rating: 5,
    date: "12/01/2025",
    content: "One month and I’ve already seen a difference!",
  },
  {
    id: 3,
    name: "Donabeth Houx",
    verified: true,
    rating: 5,
    date: "11/23/2025",
    content:
      "I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It’s a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!",
  },
  {
    id: 4,
    name: "Dawn Camacho",
    verified: true,
    rating: 5,
    date: "11/17/2025",
    content:
      "It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy",
  },
  {
    id: 5,
    name: "Anonymous",
    verified: true,
    rating: 5,
    date: "11/13/2025",
    content: "I have noticed a difference on my swelling.",
  },
]

export default function ReviewsList() {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-10">
      {/* Sort */}
      <ReviewSortDropdown />

      <div className="divide-y divide-[#FFE5E5]">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>

      <ReviewsPagination />
    </section>
  )
}
