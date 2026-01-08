export default function RootCauseCard({ img, description }) {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={img}
        alt="root cause"
        className="w-59 h-46 object-cover rounded-t-lg"
      />

      <div className="w-59 h-37.5 bg-[#f7f7f7] rounded-lg flex items-center justify-center p-4">
        <p className="font-nunito text-center">{description}</p>
      </div>
    </div>
  )
}
