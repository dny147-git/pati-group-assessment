export default function ReviewsPagination() {
  return (
    <div className="flex justify-center items-center gap-4 mt-8 text-sm">
      <button className="font-medium text-gray-700 cursor-pointer text-[28px] ">
        1
      </button>
      <button className="text-[#FA8A8A] cursor-pointer hover:opacity-50 text-[20px] ">
        2
      </button>
      <button className="text-[#FA8A8A] cursor-pointer hover:opacity-50 text-[20px] ">
        3
      </button>

      <button className="text-[#FA8A8A] cursor-pointer  hover:opacity-50 text-[20px] ">
        {">"}
      </button>
      <button className="text-[#FA8A8A] cursor-pointer font-bold hover:text-[#FA8A8A] text-[20px] hover:opacity-50">
        {"> |"}
      </button>
    </div>
  )
}
