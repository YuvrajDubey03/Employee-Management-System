import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const AllTask = () => {


   const [userData, setUserData] = useContext(AuthContext);

  return (
    <div id='alltask' className='bg-[#1c1c1c] p-5 rouded mt-5  '>
      <div className='bg-emerald-400 mb-2 h-15 py-2 px-4 flex justify-between rounded  text-white' >
            <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
            <h3  className="w-1/5 text-lg font-medium "> New Task</h3>
            <h5  className="w-1/5  text-lg font-medium">Active Task</h5>
              <h5  className="w-1/5  text-lg font-medium">Completed</h5>
                <h5  className="w-1/5  text-lg font-medium">Failed</h5>
        </div>
<div className="">
  

    {userData?.map(function (elem ,idx) {
     
     
     return   <div key={idx} className=' mb-2 h-15 py-2 px-4 flex justify-between rounded border-2 border-solid border-emerald-400' >
            <h2 className="w-1/5 text-lg font-medium text-white">{elem.firstName}</h2>
            <h3  className="w-1/5 text-lg font-medium  text-blue-400">{elem.taskNumbers.newTask}</h3>
            <h5  className="w-1/5 text-lg font-medium text-yellow-400">{elem.taskNumbers.active}</h5>
              <h5  className="w-1/5 text-lg font-medium  text-green-600">{elem.taskNumbers.completed}</h5>
                <h5  className="w-1/5 text-lg font-medium text-red-600">{elem.taskNumbers.failed}</h5>
        </div>

    })}
      
</div>
        
    </div>
  )
}

export default AllTask
