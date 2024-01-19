import { NavLink } from "react-router-dom"


export const CookiesFile = () => {
  return (
  

<div id="my_modal_3" >
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div>
        <h2 className="text-4xl font-bold text-center uppercase ">Cookies</h2>
       <p className="text-base">We use cookies to provide you the best experience</p>
       <NavLink className='text-light-primary underline'>Learn More</NavLink>
       <div className="text-center space-x-4">
            <button className="px-3 py-2 border-light-primary border-[0.2px] rounded-lg text-light-primary">Accept</button>
            <button className="px-3 py-2 bg-light-primary  rounded-lg  text-dark-text">Accept Cookies</button>
           
       </div>
    </div>
  </div>
</div>
  )
}
