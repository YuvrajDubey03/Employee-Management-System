import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div className='h-full w-90 shrink-0 bg-[#111827] border border-[#F59E0B]/40 rounded-xl py-4 px-4 text-white'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-[#F59E0B] px-3 text-sm py-1 capitalize rounded text-black font-semibold'>
          {data.category}
        </h3>
        <h4 className='text-sm text-gray-300'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 text-gray-200'>{data.taskDescription}</p>

      <div className='flex justify-between gap-3 mt-4'>
        <button className='w-1/2 bg-[#22C55E] hover:bg-[#16A34A] py-2 rounded text-sm font-semibold'>
          Mark as Read
        </button>
        <button className='w-1/2 bg-[#EF4444] hover:bg-[#DC2626] py-2 rounded text-sm font-semibold'>
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
