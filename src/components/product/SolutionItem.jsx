import { useState } from "react"

export default function SolutionItem({ title, type, content }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="p-4 rounded-4xl border border-[#d2d2d2]">
      {/* heading */}
      <div
        className="font-nunito flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <p>{title}</p>

        <div className="w-7 h-7 flex items-center justify-center bg-[#f3eee0] rounded-full">
          <span className="text-[#039869] text-lg">
            {isExpanded ? "x" : "+"}
          </span>
        </div>
      </div>

      {/* animated content */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="font-nunito pt-4">
          {/* LIST TYPE */}
          {type === "list" && (
            <>
              <strong>{content.heading}</strong>
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
