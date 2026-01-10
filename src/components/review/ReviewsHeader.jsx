export default function ReviewsHeader() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-sm text-gray-500 mb-4">
        Excellent <span className="font-medium">4.8 out of 5</span>{" "}
        <span className="text-green-600 font-semibold">★ Trustpilot</span>
      </p>

      <h2 className="text-[24px] md:text-[34px] font-[400px] font-lora w-full md:w-200 ">
        Real Women, Real Results: 93,000+ Transformations
      </h2>

      <p className="mt-4 font-nunito">
        All reviews verified from actual paying customers
      </p>

      <h3 className="mt-12 text-2xl font-triong tracking-wide">
        Customer Reviews
      </h3>
    </div>
  )
}
