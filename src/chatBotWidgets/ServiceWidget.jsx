import { useNavigate } from "react-router-dom"


const ServiceWidget = () => {
    const navigate =useNavigate()
  return (
    <div>
        
    <ul className="ml-6 list-disc">
        <li>GRAPHIC DESIGN</li>
        <li>WEB DEVELOPMENT</li>
        <li>UI/UX DESIGN</li>
        <li>APP DEVELOPMENT</li>
        <li>DIGITAL MARKETING</li>
        <li>AI INTEGRATION</li>
        <li>SEO</li>
       
    </ul>
    <p>If you have any other inquiry <span onClick={()=>navigate('/contact')} className="font-semibold text-light-primary">Click here</span></p>
</div>
  )
}

export default ServiceWidget