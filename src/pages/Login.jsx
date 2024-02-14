import { useState } from "react"


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
   <div className=" mt-24">
<div> 
  <h2 className="text-center text-2xl uppercase font-semibold md:text-3xl ">Admin Login</h2>
</div>

 <div className="w-[40%] mx-auto mt-10 ">
    
    <div className="relative rounded-lg border border-solid border-white border-opacity-20  dark:bg-gray-800 dark:opacity-100 bg-white bg-opacity-100 shadow-xl px-6 py-10 my-8">
  
  <form  className="">
  
   <div className="mb-6">
     <label className="block text-light-text dark:text-dark-text" htmlFor="email">Email</label>
     <input required value={email} onChange={(e)=>setEmail(e.target.value)} className="appearance-none bg-transparent w-full py-2 outline-none border-b-[0.5px] border-[#454545]" type="email" name="user_email" />
   </div>
  
   <div className="mb-6">
     <label className="block text-light-text dark:text-dark-text" htmlFor="email">Password</label>
     <input required value={password} onChange={(e)=>setPassword(e.target.value)} className="appearance-none bg-transparent w-full py-2 outline-none border-b-[0.5px] border-[#454545]" type="password" name="user_password" />
   </div>
   
   
   <div  className="flex justify-center">
       <button type="submit"  className=" w-[60%] mb-2 mt-8 md:mb-0 px-8 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary" >Submit</button>
       </div>

 </form>
 </div>
 </div>

   </div>
  )
}

export default Login