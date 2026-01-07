import ProductPanelLeft from "./ProductPanelLeft"
import ProductPanelRight from "./ProductPanelRight"

export default function ProductPanel() {
  return (
    <div className="my-4 flex justify-center gap-16">
      <ProductPanelLeft />
      <ProductPanelRight />
    </div>
  )
}
