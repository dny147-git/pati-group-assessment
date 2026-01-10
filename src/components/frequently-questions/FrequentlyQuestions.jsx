import React from "react"
import FrequentlyQuestionItem from "./FrequentlyQuestionItem"
import daysImg from "../../assets/images/60-days.webp"
const QUESTIONS = [
  {
    id: "q1",
    title: "How is this different from lymphatic drops I saw on TikTok?",
    type: "text",
    content: {
      text: `Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.
Sculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more.`,
    },
  },

  {
    id: "q2",
    title: " Why didn't my diet changes work?",
    type: "text",
    content: {
      text: `Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there. That's why you could eat perfectly clean and still wake up bloated—the backed-up lymphatic waste was still pooling in your tissues.`,
    },
  },
  {
    id: "q3",
    title: "How long until I see results?",
    type: "text",
    content: {
      text: `Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. But true restoration takes time—we recommend 90 days for complete results.`,
    },
  },
  {
    id: "q4",
    title: "Is this safe? Any side effects?",
    type: "text",
    content: {
      text: `Sculptique contains 100% natural botanical ingredients used safely for centuries. The most common experience is increased urination in the first few days (expected—you're flushing excess fluid). Serious side effects are extremely rare. However, if you have pre-existing conditions or take prescription medications, consult your healthcare provider first.`,
    },
  },
  {
    id: "q5",
    title: "Can I take this with other supplements?",
    type: "text",
    content: {
      text: `Yes. Sculptique works synergistically with most supplements. However, if you're taking blood thinners, diuretics, thyroid medication, or immune-suppressing drugs, check with your healthcare provider first.`,
    },
  },
  {
    id: "q6",
    title: "How do I use it?",
    type: "text",
    content: {
      text: `Take 2 capsules daily with water. Any time of day (though mornings are ideal). With or without food. Just be consistent.`,
    },
  },
  {
    id: "q7",
    title: "What if it doesn't work for me?",
    type: "text",
    content: {
      text: `You have 60 full days to try it. If you don't feel lighter, less bloated, more energized—send it back. Even if you've taken every capsule. We'll refund your purchase immediately. You only keep Sculptique if it works for YOU.`,
    },
  },
  {
    id: "q8",
    title: "Where is this manufactured?",
    type: "text",
    content: {
      text: `Sculptique is manufactured in the USA at an FDA-registered, GMP-certified facility. We use Infrared Spectroscopy testing, heavy metal testing, and third-party quality control. Every batch is tested to ensure therapeutic doses with no contaminants.`,
    },
  },
  {
    id: "q9",
    title: "Why isn't this in stores?",
    type: "text",
    content: {
      text: `Two reasons: Quality control (we oversee the entire process from sourcing to testing) and price (retail markup would make it cost at least double). By selling direct, we maintain the highest quality while keeping the price affordable.`,
    },
  },
  {
    id: "q10",
    title: " Is this vegan/gluten-free?",
    type: "text",
    content: {
      text: `Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients.`,
    },
  },
]
export default function FrequentlyQuestions() {
  return (
    <div className="my-14 flex flex-col items-center justify-center">
      <h2 className="font-lora text-[32px] font-normal my-4">
        Frequently Asked Questions
      </h2>
      <div className="bg-linear-to-b from-white to-[#f3eee0] max-w-206 p-8 rounded-2xl ">
        {QUESTIONS.map((question) => {
          return (
            <FrequentlyQuestionItem
              type={question.type}
              title={question.title}
              content={question.content}
            />
          )
        })}
      </div>
      <button
        className="flex justify-center font-nunito mt-4 py-5 px-20 cursor-pointer font-bold
           text-white bg-black rounded-sm transition-all duration-200 hover:opacity-70"
      >
        <a
          className="text-[18px]"
          href="https://pay.trysculptique.com/lymphatic/checkout"
          target="_blank"
        >
          {" "}
          Try Lymphatic Drainage Risk-Free
        </a>
      </button>
      <div className="my-4 flex gap-4 items-center justify-center font-nunito">
        <img src={daysImg} alt="60 days img" className="w-6 h-6 object-cover" />
        <p className="font-nunito">60-Day Money-Back Guarantee</p>
      </div>
    </div>
  )
}
