import "./App.css"
import Logo from "./assets/images/logo.avif"
import IngredientSystem from "./components/Ingredient/IngredientSystem"
import ExpertAdviceSection from "./components/product/ExpertAdviceSection"
import ProductBenefits from "./components/product/ProductBenefits"
import ProductHeroSection from "./components/product/ProductHeroSection"
import ProductPanel from "./components/product/ProductPanel"
import ReviewsList from "./components/review/ReviewList"
import ReviewsSection from "./components/review/ReviewsSection"
import RootCauseSection from "./components/root-cause/RootCauseSection"
import WhyNothingWorked from "./components/root-cause/WhyNothingWorked"
import SliderImg from "./components/ui/SliderImg"
import StoriesSection from "./components/stories/StoriesSection"
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
      <ReviewsSection />
      <ReviewsList />
      <ProductBenefits />
      <ExpertAdviceSection />
      <StoriesSection />
    </div>
  )
}

export default App
