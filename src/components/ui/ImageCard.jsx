export default function ImageCard({ width = 286, height = 286, src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width, height }}
      className="object-cover rounded-lg"
    />
  )
}
