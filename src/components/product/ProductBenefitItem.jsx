export default function ProductBenefitItem({ item }) {
  return (
    <div className="flex flex-col w-73 h-31.5 gap-2 items-center font-nunito ">
      <img src={item.image} className="w-10 h-10 object-cover" alt="" />
      <p className="font-medium">{item.title}</p>
      <p className="">{item.description}</p>
    </div>
  )
}
