import React from 'react'

const AcceptTask = ({data}) => {

  return (
       <div className='h-full w-90 shrink-0 bg-yellow-400 rounded-xl py-4 px-4 '>
          <div className='flex justify-between items-center  '>
               <h3 className='bg-red-600 px-3 text-sm py-1 capitalize rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
              </div>
              <h2 className='mt-5 text-2xl font-semibold '>{data.taskTitle}</h2>


        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Read</button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
        </div>
    </div>
  )
}

export default AcceptTask
