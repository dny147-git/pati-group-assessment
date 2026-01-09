import { useRef, useState } from "react"
import StoryVideoCard from "./StoryVideoCard"

const videos = [
  "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
  "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
  "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
  "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
  "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
  "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
  "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
  "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
  "https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4",
  "https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4",
]

export default function StoriesSlider() {
  const sliderRef = useRef(null)
  const videoRefs = useRef([])
  const [index, setIndex] = useState(0)

  const total = videos.length
  const progress = ((index + 1) / total) * 100

  const scrollTo = (i) => {
    const container = sliderRef.current
    const width = container.children[0].clientWidth + 24

    container.scrollTo({
      left: width * i,
      behavior: "smooth",
    })

    setIndex(i)
  }

  return (
    <div>
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-hidden snap-x snap-mandatory"
      >
        {videos.map((src, i) => (
          <StoryVideoCard
            key={i}
            src={src}
            ref={(el) => (videoRefs.current[i] = el)}
          />
        ))}
      </div>
      <div className="flex items-center gap-4 mt-6">
        <div className="flex-1 h-1 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <button
          onClick={() => index > 0 && scrollTo(index - 1)}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
        >
          {"<"}
        </button>
        <button
          onClick={() => index < total - 1 && scrollTo(index + 1)}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
        >
          {">"}
        </button>
      </div>
    </div>
  )
}
