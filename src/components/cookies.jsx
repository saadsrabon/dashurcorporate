/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Document, Page } from 'react-pdf';
import cookiesDoc from '../assets/cookies_dashur.pdf';

export const CookiesFile = ({showCookies ,setShowCookies}) => {
  const scrollableBoxRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);
 


  useEffect(() => {
    const scrollableBox = scrollableBoxRef.current;

    if (scrollableBox && autoScroll) {
      scrollableBox.scrollTop = scrollableBox.scrollHeight;
    }
  }, [autoScroll]);

  const handleCheckboxChange = () => {
    setAutoScroll(!autoScroll);
  };
  return (
  

<div className=" bottom-5 "  id="my_modal_3" >
  <div className="modal-boxx ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button onClick={()=>setShowCookies(prev=>!prev)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div>
        <h2 className="text-4xl font-bold text-center uppercase ">Cookies</h2>
        <div className="my-4" style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc',  }} ref={scrollableBoxRef}>
      <div style={{ padding: '10px' }}>
      
        {/* Add more content as needed */}
      </div>
      <div>
        <label className="">
          <input className="mr-2" type="checkbox" checked={autoScroll} onChange={handleCheckboxChange} />
           I accept the cookies
        </label>
      </div>
    </div>
      
    </div>
  </div>
</div>
  )
}
