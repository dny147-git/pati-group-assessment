import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import playSvgIcon from "../../assets/images/playSvg.svg"
const StoryVideoCard = forwardRef(({ src }, ref) => {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useImperativeHandle(ref, () => ({
    pause() {
      videoRef.current?.pause()
      setPlaying(false)
    },
  }))

  const togglePlay = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
      setPlaying(true)
    } else {
      videoRef.current.pause()
      setPlaying(false)
    }
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || !video.duration) return
  }

  return (
    <div className="relative min-w-70 md:min-w-[320px] h-130 rounded-xl overflow-hidden bg-black snap-start">
      {/* Progress bar */}

      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setPlaying(false)
        }}
      />
      <button
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center transition ${
          playing ? "bg-black/0" : "bg-black/30"
        }`}
      >
        {!playing && (
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img src={playSvgIcon} className="w-4 h-4" alt="" />
          </div>
        )}
      </button>
    </div>
  )
})

export default StoryVideoCard
