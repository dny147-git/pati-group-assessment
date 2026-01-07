export default function PricingItem({ option, selected, setSelected }) {
  return (
    <div>
      {/* heading */}
      <div
        className="flex justify-between bg-white p-4 rounded-lg cursor-pointer"
        style={option.id === selected ? { opacity: 1 } : { opacity: 0.5 }}
        onClick={() => setSelected(option.id)}
      >
        <div className="flex items-center gap-3">
          {/* bubble */}

          <div>
            <div className="w-6.5 h-6.5 rounded-full border-2 border-[#039869] flex justify-center items-center">
              {selected === option.id ? (
                <div className="w-4 h-4 rounded-full bg-[#039869]"></div>
              ) : undefined}
            </div>
          </div>
          <div>
            <p className="font-nunito">{option.title}</p>
            <p className="text-[12px] font-nunito">{option.subtitle}</p>
            <p></p>
          </div>
        </div>
        <div>
          <p className="font-nunito">${option.newPrice}</p>
          <p className="text-sm font-nunito line-through text-[#000000BF]">
            ${option.oldPrice}
          </p>
        </div>
      </div>
      {/* item */}
      <div className="flex flex-col gap-0.5">
        {option.items.map((item, index) => {
          let lastIndex = option.items.length - 1
          return (
            <div
              key={item.id}
              className={`bg-[#039869] py-1 px-2 ${
                index === lastIndex ? "rounded-b-lg" : ""
              }`}
              style={option.id === selected ? { opacity: 1 } : { opacity: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={item.img}
                  alt="delivery truck icon"
                  className="w-8 h-8 object-cover"
                />
                <p className="text-white font-nunito text-[12px] font-semibold">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
