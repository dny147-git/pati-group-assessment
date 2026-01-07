import { useState } from "react"
import PricingItem from "./PricingItem"

export default function PricingOptions({ options }) {
  const [selected, setSelected] = useState("p1")
  return (
    <div className="my-4 bg-[#f3eee0] flex flex-col gap-3 p-3 rounded-lg">
      {options.map((option) => {
        return (
          <PricingItem
            selected={selected}
            setSelected={setSelected}
            key={option.id}
            option={option}
          />
        )
      })}
    </div>
  )
}
