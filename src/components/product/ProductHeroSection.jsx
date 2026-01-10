import ProductImage from "./ProductImage"
import ProductIntro from "./ProductIntro"

export default function ProductHeroSection() {
  return (
    <section className="w-full pt-10 md:pt-14 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 lg:gap-16">
          <ProductImage />
          <ProductIntro />
        </div>
      </div>
    </section>
  )
}
