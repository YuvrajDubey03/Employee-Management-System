import React from 'react'

const FailedTask = ({data}) => {
  return (
  
<div className='h-full w-90 shrink-0 bg-[#2A0B0B] border border-[#7F1D1D] rounded-xl py-4 px-4 text-white'>
  <div className='flex justify-between items-center'>
    <h3 className='bg-[#EF4444] px-3 text-sm py-1 capitalize rounded text-white'>
      {data.category}
    </h3>
    <h4 className='text-sm text-gray-300'>{data.taskDate}</h4>
  </div>

  <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
  <p className='text-sm mt-2 text-gray-200'>{data.taskDescription}</p>

  <div className='mt-4'>
  <button className='w-full bg-[#B91C1C] hover:bg-[#991B1B] cursor-pointer py-2 rounded text-sm font-semibold active:scale-95 transition'>
  Failed
</button>
  </div>
</div>

  )
}

export default FailedTask
