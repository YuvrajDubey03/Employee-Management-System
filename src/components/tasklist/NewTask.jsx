import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className='h-full w-90 shrink-0 bg-[#1E293B] border border-[#334155] rounded-xl py-4 px-4 text-white'>
      
      <div className='flex justify-between items-center'>
        <h3 className='bg-[#2563EB] px-3 text-sm py-1 capitalize rounded text-white font-semibold'>
          {data.category}
        </h3>
        <h4 className='text-sm text-gray-300'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 text-gray-200'>{data.taskDescription}</p>

      <div className='mt-4'>
       <button className='w-full bg-[#3B82F6] hover:bg-[#2563EB] cursor-pointer py-2 rounded-md text-sm font-semibold active:scale-95 transition'>
  Accept Task
</button>

      </div>
    </div>
  )
}

export default NewTask
