import { useState } from "react";
import CardWrapper from "./CardWrapper";

const UploadResume = () => {
    const [selectedFile, setSelectedFile] = useState(null);

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
    };
  
    const handleUpload = () => {
      // You can implement file upload logic here
      if (selectedFile) {
        console.log(`Uploading file: ${selectedFile.name}`);
        // Add your file upload logic (e.g., using FormData and API)
      } else {
        console.log('No file selected');
      }
    };
  
    return (
      <div className="w-[50%]">
         <CardWrapper>
       <form className="">
        <div className="mb-6" >
          <label className="block" htmlFor="name">Name</label>
          <input className="appearance-none bg-transparent w-full py-2 outline-none border-b-[0.5px] border-[#454545]" type="text" name="name" />
        </div>
        <div className="mb-6">
          <label className="block" htmlFor="phone">Phone</label>
          <input className="appearance-none bg-transparent w-full py-2 outline-none border-b-[0.5px] border-[#454545]" type="text" name="phone" />
        </div>
        <div className="mb-6">
          <label className="block" htmlFor="email">Email</label>
          <input className="appearance-none bg-transparent w-full py-4" type="email" name="email" />
        </div>
      <div className="file-upload" onDrop={handleDrop} onDragOver={handleDragOver}>
        <h2>File Upload</h2>
        <input className="apperance-none" type="file" accept=".docx, .pdf" onChange={handleFileChange} />
        <p>or</p>
        <p>Drag and drop a file here</p>
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        <button className="" onClick={handleUpload}>Upload</button>
      </div>
      </form>
      </CardWrapper>
      </div>
     
    );
  };
  export default UploadResume;