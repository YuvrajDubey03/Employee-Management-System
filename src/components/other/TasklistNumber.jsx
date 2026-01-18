import React from 'react'

const TasklistNumber = ({ data }) => {
  return (
    <div className='flex flex-wrap px-5 w-full  mt-10 justify-between gap-5'>

    
      <div className='rounded-xl py-6 px-9 w-[48%] bg-[#1E293B] border border-[#334155] hover:shadow-lg hover:shadow-black/30 transition'>
        <h2 className='text-3xl font-semibold text-white'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium text-gray-200'>New Task</h3>
      </div>

      
      <div className='rounded-xl py-6 px-9 w-[48%] bg-[#052E1A] border border-[#14532D] hover:shadow-lg hover:shadow-black/30 transition'>
        <h2 className='text-3xl font-semibold text-white'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium text-gray-200'>Completed Task</h3>
      </div>

 
      <div className='rounded-xl py-6 px-9 w-[48%] bg-[#2A0B0B] border border-[#7F1D1D] hover:shadow-lg hover:shadow-black/30 transition'>
        <h2 className='text-3xl font-semibold text-white'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium text-gray-200'>Failed Task</h3>
      </div>

     
      <div className='rounded-xl py-6 px-9 w-[48%] bg-[#111827] border border-[#F59E0B66] hover:shadow-lg hover:shadow-black/30 transition'>
        <h2 className='text-3xl font-semibold text-white'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium text-gray-200'>Active Task</h3>
      </div>

    </div>
  )
}

export default TasklistNumber
