import React, { useState } from 'react'

const Header = (props) => {
// const [username, setUsername] = useState('')

// if(!data){
//   setUsername("admin")
// } else{
//   setUsername(data.firstName)
// }
const logOutUser =()=>{
localStorage.setItem("loggedInUser" , "")
props.changeUser('');
// window.location.reload();
}
  return (
    <div className='flex justify-between items-end text-white'>
      <h1 className='text-2xl font-medium '>Hello , <br /> <span className='text-3xl font-semibold'>   {props.firstName ? props.firstName : props.data?.firstName} 🖐️</span></h1>
      <button onClick={logOutUser}className='bg-red-600 hover:bg-red-700 cursor-pointer text-sm font-semibold text-white px-5 py-2 rounded-md shadow-lg shadow-red-600/20 active:scale-95 transition'

      >Log Out</button>
    </div>
  )
}

export default Header
