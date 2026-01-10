import { useState } from "react"

export default function FrequentlyQuestionItem({ title, type, content }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="py-5 px-6">
      {/* heading */}
      <div
        className="font-nunito text-[18px] flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <p>{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {/* animated content */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isExpanded ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="font-nunito pt-4">
          {/* LIST TYPE */}
          {type === "list" && (
            <>
              <ul className="pl-10 mt-4 space-y-2">
                {content.list.map((item, index) => (
                  <li key={index} className="list-disc">
                    <strong>{item.name}</strong> – {item.desc}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* TEXT TYPE */}
          {type === "text" && (
            <p
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.text }}
            ></p>
          )}
        </div>
      </div>
    </div>
  )
}
