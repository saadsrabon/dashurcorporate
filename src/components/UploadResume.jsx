import { useState } from "react";

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
      <div>
       <form action="">
        <div>
          <input type="text" name="name" />
        </div>
        <div>
          <input type="text" name="phone" />
        </div>
        <div>
          <input type="email" name="email" />
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
      </div>
    );
  };
  export default UploadResume;