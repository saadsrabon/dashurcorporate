

const InquiryForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
  return (
    <div className="w-full">
    <div className="absolute">*</div>
     <div className="rounded-lg border border-solid border-white border-opacity-20  dark:bg-gray-800 dark:opacity-100 bg-white bg-opacity-100 shadow-xl px-6 py-10 my-8">
   <form className="" onSubmit={handleUpload}>
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
 
  </form>
  </div>
  </div>
  )
}

export default InquiryForm