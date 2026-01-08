import "./App.css"
import Logo from "./assets/images/logo.avif"
import IngredientSystem from "./components/Ingredient/IngredientSystem"
import ProductHeroSection from "./components/product/ProductHeroSection"
import ProductPanel from "./components/product/ProductPanel"
import RootCauseSection from "./components/root-cause/RootCauseSection"
import WhyNothingWorked from "./components/root-cause/WhyNothingWorked"
import SliderImg from "./components/ui/SliderImg"
function App() {
  return (
    <div>
      <img src={Logo} alt="logo" className="w-40 h-10 mx-auto" />
      <ProductHeroSection />
      <ProductPanel />
      <SliderImg />
      <RootCauseSection />
      <WhyNothingWorked />
      <IngredientSystem />
    </div>
  )
}

export default App
