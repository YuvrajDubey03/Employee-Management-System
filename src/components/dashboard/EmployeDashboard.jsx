import React from 'react'
import Header from '../other/Header'
import TasklistNumber from "../other/TasklistNumber";
import TaskList from '../tasklist/TaskList';
const EmployeDashboard = ( props ) => {

  return (
    <div>
   <div className='p-10 bg-[#1c1c1c] h-screen '>
    <Header changeUser={props.changeUser} data={props.data} />
    <TasklistNumber data={props.data} />
    <TaskList data={props.data} />
   </div>
    </div>
  )
}

export default EmployeDashboard
