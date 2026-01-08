import { useState } from "react"
import downArrowIcon from "../../assets/images/down-arrow.png"
export default function IngredientCard({ title, name, img, description }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-77.5 p-4 border border-black bg-white">
      {/* title */}
      <p className="text-[#0c7c00] font-nunito mb-2 text-center">✔ {title}</p>

      {/* image */}
      <img src={img} className="h-20 object-cover mx-auto" alt="ingredient" />

      {/* header */}
      <div
        className="flex justify-between items-center cursor-pointer mt-3"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="font-trirong font-semibold">{name}</p>

        <img
          src={downArrowIcon}
          className={`w-6 h-3 object-cover transition-transform duration-600 ${
            isOpen ? "rotate-180" : ""
          }`}
          alt="toggle"
        />
      </div>

      {/* expandable content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm leading-relaxed font-nunito">{description}</p>
      </div>
    </div>
  )
}
