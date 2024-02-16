import { useNavigate } from "react-router-dom"


const ContactsWidget = () => {
    const navigate = useNavigate()
  return (
    <div>
        <p className="text-light-text  dark:text-dark-text text-base ml-2 my-2">Make a phone call to let us know your requirements to provide the best service. </p>
        <a href="tel:(702) 960-4800" className="my-2 block w-20 shrink-0 px-2 py-1 text-[#0C0C0C] text-base ml-2 font-medium rounded-lg bg-light-primary text-[14px] ">
                  Call Now
                </a>

                <p className="ml-2">Or visit our Contact page for more details <span onClick={()=>navigate('/contact')} className="text-light-primary font-semibold ">Visit</span></p>
    </div>
  )
}

export default ContactsWidget