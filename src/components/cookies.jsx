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
       <p>We use cookies to provide you the best experience and analyze site traffic</p>
       <NavLink>Learn More</NavLink>
       <div>
            <button>Accept</button>
            <button>Decline</button>
       </div>
    </div>
  </div>
</div>
  )
}
