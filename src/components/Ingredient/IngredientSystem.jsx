import img0 from "../../assets/images/ingredient/Frame_1484580382.avif"
import img1 from "../../assets/images/ingredient/Frame_1484580382_1.avif"
import img2 from "../../assets/images/ingredient/image_2.avif"
import img3 from "../../assets/images/ingredient/image_3.avif"
import img4 from "../../assets/images/ingredient/image_4.avif"
import img6 from "../../assets/images/ingredient/image_6.avif"
import img7 from "../../assets/images/ingredient/image_7.avif"
import img8 from "../../assets/images/ingredient/image_8.avif"
import IngredientCard from "./IngredientCard"
import effectImg from "../../assets/images/effect.webp"
const INGREDIENT_ITEMS = [
  {
    id: "i1",
    title: "Reactivate Lymphatic Pumps",
    name: "Cleavers Extract (100mg)",
    image: img0,
    description: `Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance.
[Study: Enhanced NK cell activity in immunosuppressed models]`,
  },
  {
    id: "i2",
    title: "Flush Excess Fluid",
    name: "Dandelion Extract (250mg)",
    image: img1,
    description: `Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001).
[Study: First human pilot study on diuretic effects]`,
  },
  {
    id: "i3",
    title: "Break Down Protein Clogs",
    name: "Bromelain Powder (100mg)",
    image: img2,
    description: `Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo.
[Study: As effective as prescription NSAIDs for inflammation]`,
  },
  {
    id: "i4",
    title: "Strengthen Vessel Walls",
    name: "Rutin (100mg)",
    image: img3,
    description: `Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients.
[Study: Systematic review of 1,643 participants]`,
  },
  {
    id: "i5",
    title: "Reduce Inflammation",
    name: "Burdock Root Powder (200mg)",
    image: img4,
    description: ` Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance.
[Study: 42-day trial in osteoarthritis patients]`,
  },
  {
    id: "i6",
    title: "Boost Immune Clearance",
    name: "Echinacea Purpurea Extract (500mg)",
    image: img6,
    description: `Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections.
[Study: Increased NK cell cytotoxic activity]`,
  },
  {
    id: "i7",
    title: "Support Metabolism",
    name: "Kelp Extract (30mg)",
    image: img7,
    description: `Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials.
[Study: Dose-dependent increase in TSH levels]`,
  },
  {
    id: "i8",
    title: "Antioxidant Protection",
    name: "Lemon Powder (50mg)",
    image: img8,
    description: `Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health.
[Study: Triple-masked trial in 90 participants]`,
  },
]
export default function IngredientSystem() {
  return (
    <div className="w-full bg-[#f7f2e7] flex flex-col justify-center items-center py-14 my-8">
      <h2 className="font-lora text-[32px] mb-4 w-200  text-center">
        <span className="text-[#039869]">The 8-Ingredient System</span> That
        Restores What Hormones Once Maintained
      </h2>
      <div className="w-200 font-nunito flex flex-col gap-2 items-center text-[18px]">
        <p className="text-center">
          Sculptique is the only formula that addresses ALL 6 mechanisms of
          lymphatic dysfunction simultaneously—not with symbolic doses, but with
          therapeutic amounts based on clinical research.
        </p>
        <p>
          Not just moving fluid temporarily. Not just reducing inflammation.
          <strong> Complete restoration.</strong>
        </p>
      </div>
      <div className="w-315 flex flex-wrap my-8">
        {INGREDIENT_ITEMS.map((item) => {
          return (
            <IngredientCard
              key={item.id}
              title={item.title}
              name={item.name}
              description={item.description}
              img={item.image}
            />
          )
        })}
      </div>
      <img src={effectImg} className="w-145 object-cover" alt="" />
    </div>
  )
}
