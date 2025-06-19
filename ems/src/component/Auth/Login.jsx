import React, { useState } from 'react'

//
const login =() => {
  const[ email,setEmail] = useState('')
  const [ passward , setPassword] =useState('')

  const submitHandler =(e) =>{
    e.preventDefault()
  console.log("your form submitted")
  }
//}

//const Login = () => {
  return (
    <div className ='flex items-center justify-center h-screen w-screen'>
     <div className ='border-2 border-emerald-600 p-10 rounded-xl '>
       <form  onSubmit={(e) =>{
          submitHandler(e)
       }} 
        className='flex flex-col text-center justify-center '>
        <input 
        required className='border-2 border-emerald-500 py-1 px-3 bg-transparent rounded-full text-xl  ' type='email' placeholder='email'/>
        <input  required className='border-2 border-emerald-600 py-1 px-3 bg-transparent rounded-full  text-xl  mt-2 ' type='password' placeholder='password'/>  
        <button className='border-2 border-emerald-600 bg-green-600 mt-3 rounded-full py-1 px-1'>Login</button>     
       </form>
     </div>
    </div>
  )
}

export default Login
