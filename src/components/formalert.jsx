/* eslint-disable react/prop-types */


const Formalert = ({message}) => {
  return (
    <div  className="flex gap-2 py-2 my-2 items-center">
   <svg width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="26" height="26" rx="13" stroke="#F28B82" strokeWidth="2"/>
<path d="M14.6499 20.5002L14.6499 12.7002" stroke="#F28B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0499 12.7002L14.6499 12.7002" stroke="#F28B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.6499 8.8L14.6499 7.5" stroke="#F28B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    <span className="text-red-300">{message}</span>
  </div>
  )
}

export default Formalert