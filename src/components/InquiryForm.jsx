import { useState } from "react";


const InquiryForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    // Add your form submission logic here
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(name, phone, email);
    };
  return (
    <div id="contact-form " className="w-[40%]">
    
     <div className="relative rounded-lg border border-solid border-white border-opacity-20  dark:bg-gray-800 dark:opacity-100 bg-white bg-opacity-100 shadow-xl px-6 py-10 my-8">
     <div className=" absolute right-4 top-3"><svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_187_626"  maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
<rect width="36" height="36" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_187_626)">
<path d="M9.60183 28.502L7.50183 26.402L15.9018 18.002L7.50183 9.60195L9.60183 7.50195L18.0018 15.902L26.4018 7.50195L28.5018 9.60195L20.1018 18.002L28.5018 26.402L26.4018 28.502L18.0018 20.102L9.60183 28.502Z" fill="#EBEBEB"/>
</g>
</svg>
</div>
   <form className="" onSubmit={handleSubmit}>
    <div className="mb-6" >
      <label className="block text-light-text dark:text-dark-text" htmlFor="name">Name</label>
      <input onChange={(e)=>setName(e.target.value)} className="appearance-none bg-transparent w-full py-2 outline-none border-b-[0.5px] border-[#454545]" type="text" name="name" />
    </div>
    <div className="mb-6">
      <label className="block text-light-text dark:text-dark-text" htmlFor="phone">Phone</label>
      <input onChange={(e)=>setPhone(e.target.value)} className="appearance-none bg-transparent w-full py-2 outline-none border-b-[0.5px] border-[#454545]" type="text" name="phone" />
    </div>
    <div className="mb-6">
      <label className="block text-light-text dark:text-dark-text" htmlFor="email">Email</label>
      <input onChange={(e)=>setEmail(e.target.value)} className="appearance-none bg-transparent w-full py-2 outline-none border-b-[0.5px] border-[#454545]" type="email" name="email" />
    </div>
    <div className="mb-6">
      <label className="block text-light-text dark:text-dark-text" htmlFor="email">Write Your Message</label>
      <textarea onChange={(e)=>setEmail(e.target.value)} className="appearance-none bg-transparent w-full py-2 outline-none border-b-[0.5px] border-[#454545]" type="email" name="email" />
    </div>
    
    <div  className="flex justify-center">
        <button type="submit"  className=" w-[60%] mb-2 mt-8 md:mb-0 px-8 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary" >Submit</button>
        </div>
 
  </form>
  </div>
  </div>
  )
}

export default InquiryForm