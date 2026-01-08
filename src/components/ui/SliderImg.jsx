import { useEffect, useRef } from "react"
import graziaImg from "../../assets/images/Grazia.webp"
import vogueImg from "../../assets/images/vogue.webp"
import WHImg from "../../assets/images/WH.webp"

const IMAGES = [
  graziaImg,
  vogueImg,
  WHImg,
  graziaImg,
  vogueImg,
  WHImg,
  graziaImg,
  vogueImg,
  WHImg,
]

export default function SliderImg() {
  const trackRef = useRef(null)
  const xRef = useRef(0)
  const itemWidthRef = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track || track.children.length === 0) return

    const firstItem = track.children[0]

    // ✅ ĐO WIDTH 1 LẦN DUY NHẤT
    const style = window.getComputedStyle(firstItem)
    itemWidthRef.current =
      firstItem.offsetWidth +
      parseFloat(style.marginLeft) +
      parseFloat(style.marginRight)

    const speed = 0.4

    const animate = () => {
      xRef.current -= speed

      if (-xRef.current >= itemWidthRef.current) {
        xRef.current += itemWidthRef.current
        track.appendChild(track.children[0])
      }

      track.style.transform = `translate3d(${xRef.current}px, 0, 0)`
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className="w-full bg-[#F3EEE0] py-5 my-8 overflow-hidden">
      <h3 className="font-trirong text-2xl text-center">As Seen In</h3>

      <div className="relative mt-5 w-full overflow-hidden">
        <div ref={trackRef} className="flex flex-nowrap will-change-transform">
          {IMAGES.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="brand logo"
              className="h-7.5 mx-12.5 object-contain shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
