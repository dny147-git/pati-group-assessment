import BenefitItem from "./BenefitItem"

export default function BenefitsSection({ benefits }) {
  return (
    <section className="flex flex-col gap-4">
      {benefits.map((benefit) => {
        return <BenefitItem key={benefit.id} benefit={benefit}></BenefitItem>
      })}
    </section>
  )
}
