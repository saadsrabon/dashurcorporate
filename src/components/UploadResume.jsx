import axios from "axios";
import { useRef, useState } from "react";



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
          "http://localhost:5000/upload-files",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        console.log(result);
        
      } else {
        console.log('No file selected');
      }
    };
      
    
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