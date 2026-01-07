export default function BenefitItem({ benefit }) {
  return (
    <div className="flex items-center gap-3">
      <img src={benefit.img} alt={benefit.title} className="w-13 h-13" />
      <p className="font-nunito flex-1">{benefit.title}</p>
    </div>
  )
}
