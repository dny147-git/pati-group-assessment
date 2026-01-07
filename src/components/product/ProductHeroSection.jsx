import ProductImage from "./ProductImage"
import ProductIntro from "./ProductIntro"

export default function ProductHeroSection() {
  return (
    <section className="p-8 flex justify-center gap-16">
      <ProductImage />
      <ProductIntro />
    </section>
  )
}
