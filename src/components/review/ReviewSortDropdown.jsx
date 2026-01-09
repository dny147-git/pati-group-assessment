import { useEffect, useRef, useState } from "react"
import arrowDownIcon from "../../assets/images/free-arrow-down-icon.png"
const options = [
  { label: "Most Recent", value: "recent" },
  { label: "Highest Rating", value: "highest" },
  { label: "Lowest Rating", value: "lowest" },
  { label: "Only Pictures", value: "only pictures" },
  { label: "Pictures First", value: "pictures first" },
  { label: "Video First", value: "video first" },
  { label: "Most Helpful", value: "most helpful" },
]

export default function ReviewSortDropdown() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])
  const ref = useRef(null)
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])
  return (
    <div className="relative mb-6 text-sm text-[#FA8A8A] w-fit" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <span>{selected.label}</span>
        <span className="text-xs">
          <img src={arrowDownIcon} className="w-4 h-4 object-cover" alt="" />
        </span>
      </button>

      {open && (
        <ul className="absolute mt-2 bg-white border border-black rounded shadow-sm min-w-27.5 z-10">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                setSelected(opt)
                setOpen(false)
              }}
              className="px-2 py-2  hover:bg-[#FFE5E5] cursor-pointer"
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
