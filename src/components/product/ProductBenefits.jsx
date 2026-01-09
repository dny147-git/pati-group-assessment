import React from "react"
import ProductBenefitItem from "./ProductBenefitItem"
import shipImg from "../../assets/images/ship-min.png"
import supportImg from "../../assets/images/support-min.png"
import naturalImg from "../../assets/images/natural-min.png"
import daysImg from "../../assets/images/60-min.png"

const ITEMS = [
  {
    id: "pb1",
    title: "Free Shipping from USA",
    description: "On all orders",
    image: shipImg,
  },
  {
    id: "pb2",
    title: "Naturally Supports Your Body",
    description: "Promotes healthy immune cell functions",
    image: supportImg,
  },
  {
    id: "pb1",
    title: "100% Natural Ingredients",
    description: "8 active, natural ingredients",
    image: naturalImg,
  },
  {
    id: "pb1",
    title: "Try it Risk Free for 60 Days",
    description: "60-day money-back guarantee",
    image: daysImg,
  },
]
export default function ProductBenefits() {
  return (
    <div className="w-full bg-[#f3eee0] py-8 f flex justify-center gap-6 my-14">
      {ITEMS.map((item) => {
        return <ProductBenefitItem key={item.id} item={item} />
      })}
    </div>
  )
}
