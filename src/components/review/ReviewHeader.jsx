export default function ReviewHeader({ name, verified }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      {/* Avatar */}
      <div className="w-9 h-9 bg-[#FFE5E5] flex items-center justify-center rounded">
        <span className="text-[#FA8A8A] text-sm">👤</span>
      </div>

      <div className="flex items-center gap-2 text-sm font-montserrat">
        <span className="text-[#FA8A8A] font-medium">{name}</span>
        {verified && (
          <span className="bg-[#FA8A8A] h-4 text-white text-xs px-2">
            Verified
          </span>
        )}
      </div>
    </div>
  )
}
