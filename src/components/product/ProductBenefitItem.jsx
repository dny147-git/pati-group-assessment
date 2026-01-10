export default function ProductBenefitItem({ item }) {
  return (
    <div className="w-full flex flex-col gap-2 items-center text-center font-nunito">
      <img src={item.image} className="w-10 h-10 object-cover" alt="" />
      <p className="font-medium text-[14px] sm:text-[16px]">{item.title}</p>
      <p className="text-[12px] sm:text-[14px] text-gray-700">
        {item.description}
      </p>
    </div>
  )
}
