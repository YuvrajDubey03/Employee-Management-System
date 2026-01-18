import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className='h-full w-90 shrink-0 bg-[#052e1a] border border-[#14532d] rounded-xl py-4 px-4 text-white'>
      
      <div className='flex justify-between items-center'>
        <h3 className='bg-[#22C55E] text-black font-semibold px-3 text-sm py-1 capitalize rounded'>
          {data.category}
        </h3>

        <h4 className='text-sm text-gray-300'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 text-gray-200'>{data.taskDescription}</p>

      <div className='mt-4'>
        <button className='w-full bg-[#16A34A] hover:bg-[#15803D] cursor-pointer py-2 rounded text-sm font-semibold active:scale-95 transition'>
  Completed
</button>

      </div>

    </div>
  )
}

export default CompleteTask
