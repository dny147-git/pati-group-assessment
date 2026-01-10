import ProductPanelLeft from "./ProductPanelLeft"
import ProductPanelRight from "./ProductPanelRight"

export default function ProductPanel() {
  return (
    <section className="w-full pt-4 md:pb-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 md:gap-14 lg:gap-16">
          <ProductPanelLeft />
          <ProductPanelRight />
        </div>
      </div>
    </section>
  )
}
