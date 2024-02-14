/* eslint-disable react/prop-types */
import axios from "axios";
import { useRef, useState } from "react";
import { Bounce, toast } from "react-toastify";



const UploadResume = ({handleClose}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');


    const inputRef =useRef(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      setSelectedFile(file);
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      
        setSelectedFile(file);
      
    };
  
    const handleUpload =async (event) => {
      event.preventDefault();
      
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("file", selectedFile);
      console.log(name, selectedFile);
 console.log(formData)
      
      // You can implement file upload logic here
      if (selectedFile) {
        console.log(`Uploading file: ${selectedFile.name}`);
        // Add your file upload logic (e.g., using FormData and API)
        const result = await axios.post(
          "https://dashur-backend.vercel.app/upload-files",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        ).catch((error) => {
          console.log(error);
        });
        console.log(result);
        toast.success(' File Uploaded!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          })
        handleClose()
        
      } else {
        console.log('No file selected');
        toast.warn('No file selected', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      
      }
    };
      
    
    return (
      
      <div className="w-full">
   <div className="rounded-lg border border-solid border-white border-opacity-20  dark:bg-gray-800 dark:opacity-100 bg-white bg-opacity-100 shadow-xl px-6 py-10 my-8">
   <div className=" absolute right-4 top-12"><svg onClick={handleClose}   width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_187_626"  maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
<rect width="36" height="36" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_187_626)">
<path d="M9.60183 28.502L7.50183 26.402L15.9018 18.002L7.50183 9.60195L9.60183 7.50195L18.0018 15.902L26.4018 7.50195L28.5018 9.60195L20.1018 18.002L28.5018 26.402L26.4018 28.502L18.0018 20.102L9.60183 28.502Z" fill="#EBEBEB"/>
</g>
</svg>
</div>
      
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
      <div className="file-upload" onDrop={handleDrop} onDragOver={handleDragOver}>
        
        <input ref={inputRef} className="apperance-none hidden" type="file" accept=".docx, .pdf" onChange={handleFileChange} />
     
     
       
      <div className="flex flex-col items-center justify-center py-5 px-4 border-black border-opacity-20 dark:border-white dark:border-opacity-20 rounded-lg border ">
      <p className="text-light-text dark:text-dark-text">Upload or drop your resume in the Word, Google Doc, PDF format</p>
      {selectedFile && <p className="text-light-text dark:text-dark-text">Selected file: {selectedFile.name}</p>}
      <button onClick={()=>inputRef.current.click()} className="mb-2 mt-4  md:mb-0 px-3 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary" >Upload Resume</button>
      </div>

        <div  className="flex justify-center">
        <button type="submit"  className=" w-[60%] mb-2 mt-8 md:mb-0 px-8 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary" >Submit</button>
        </div>
      </div>
      </form>
      </div>
      </div>

     
    );
  };
  export default UploadResume;