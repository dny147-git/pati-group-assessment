import "./App.css"
import Logo from "./assets/images/logo.avif"
import ProductHeroSection from "./components/product/ProductHeroSection"
import ProductPanel from "./components/product/ProductPanel"
function App() {
  return (
    <div>
      <img src={Logo} alt="logo" className="w-40 h-10 mx-auto" />
      <ProductHeroSection />
      <ProductPanel />
    </div>
  )
}

export default App
