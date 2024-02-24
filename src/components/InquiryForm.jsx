/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Bounce, toast } from "react-toastify";
import { useForm} from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import Formalert from "./formalert";
const InquiryForm = ({setShowForm}) => {


    // All States
    const [width , setWidth] = useState({width:'w-[40%]' , height:'300px'});
    const [isVerified, setIsVerified] = useState(false);
    // To select the form
    const form = useRef();
    const {
      register,
      handleSubmit,
      setError,
      formState: { errors },
    } = useForm({
      defaultValues:{
        user_name:'',
        user_last_name:'',
        user_phone:'',
        user_email:'',
        user_message:'',
      }
    });
   
  //  Function to send email
    const sendEmail = (e) => {
     
        if(!isVerified){
          setError('root', {
            type: "manual",
            message: "Please verify the captcha"
          });
          return;
        }
        
        emailjs
          .sendForm('service_us6o5pd', 'template_iijmxtq', form.current, {
            publicKey:'2ox7-3gdQnHMcDfGD',
          })
          .then(
            (res) => {
        
              toast.success(' Inquiry submitted!', {
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
              setShowForm(false);

            },
            (error) => {
            
              toast.warn('🦄 Something went wrong!', {
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
            
            },
          );
      };

      // 

   

  return (
    <div id="contact-form" className={`${width.width}`}>
    
     <div className="relative rounded-lg border border-solid border-white border-opacity-20  dark:bg-gray-800 dark:opacity-100 bg-white bg-opacity-100 shadow-xl px-6 py-10 my-8">
     <div className=" absolute right-4 top-3"><svg  onClick={()=>setShowForm(false)} width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_187_626"  maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
<rect width="36" height="36" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_187_626)">
<path d="M9.60183 28.502L7.50183 26.402L15.9018 18.002L7.50183 9.60195L9.60183 7.50195L18.0018 15.902L26.4018 7.50195L28.5018 9.60195L20.1018 18.002L28.5018 26.402L26.4018 28.502L18.0018 20.102L9.60183 28.502Z" fill="#EBEBEB"/>
</g>
</svg>
</div>
     <div onClick={()=>setWidth(prev=>{
        return {
          ...prev , 
        width:'w-[40%]'
        }
        
      })}  className=" absolute right-20 top-3">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="26px" fill="#ffff" viewBox="0 0 459.313 459.314"
xmlSpace="preserve">
<g>
	<path d="M459.313,229.648c0,22.201-17.992,40.199-40.205,40.199H40.181c-11.094,0-21.14-4.498-28.416-11.774
		C4.495,250.808,0,240.76,0,229.66c-0.006-22.204,17.992-40.199,40.202-40.193h378.936
		C441.333,189.472,459.308,207.456,459.313,229.648z"/>
</g>
</svg>
</div>

<button onClick={()=>setWidth(prev=>{
        return {
          ...prev , 
        width:'w-[80%]'
        }
        
      })} className="btn btn-sm btn-circle btn-ghost absolute right-10 top-2"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5ZM20 5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5Z" fill="#ffff"></path> </g></svg></button>
   <form ref={form} className="" onSubmit={handleSubmit(sendEmail)}>
    <div className="grid">
    <div className="mb-6" >
      <label className="block text-light-text dark:text-dark-text" htmlFor="name">First Name</label>
      <input className="appearance-none  bg-transparent w-full block py-2 outline-none border-b-[0.5px] border-[#454545]" type="text" name="user_name" 
     {...register("user_name", {
      required: 'Please input your first name',
      maxLength: {
        value: 10,
        message: "Your firstname can be max 8 characters" // Corrected the message
      },
      minLength: {
        value: 3,
        message: "Your first name must be at least 3 characters"
      }
    })}
      />
      
{errors?.user_name && <Formalert message={errors?.user_name?.message} />}
    </div>
    <div className="mb-6" >
      <label className="block text-light-text dark:text-dark-text" htmlFor="name">Last Name</label>
      <input {...register("user_last_name", {
  required: 'Please input your last name',
  maxLength: {
    value: 10,
    message: "Your lastname can be max 8 characters"
  },
  minLength: {
    value: 3,
    message: "Your last name must be at least 3 characters"
  },
})}  className="appearance-none bg-transparent w-full py-2 outline-none border-b-[0.5px] border-[#454545]" type="text" name="user_last_name" 
     
      />
      {errors?.user_last_name&& <Formalert message={errors?.user_last_name?.message} />}
    </div>
    </div>
    
    <div className="mb-6">
      <label className="block text-light-text dark:text-dark-text" htmlFor="phone">Phone</label>
      <input {...register("user_phone" , {required:"Please enter your phone number"})}  className="appearance-none bg-transparent w-full py-2 outline-none border-b-[0.5px] border-[#454545]" type="text" name="user_phone" />
      {errors?.user_phone && <Formalert message={errors?.user_phone?.message} />}
    </div>
    <div className="mb-6">
      <label className="block text-light-text dark:text-dark-text" htmlFor="email">Email</label>
      <input {...register("user_email" , {required:"Please enter your email"})}  className="appearance-none bg-transparent w-full py-2 outline-none border-b-[0.5px] border-[#454545]" type="email" name="user_email" />
      {errors?.user_email && <Formalert message={errors?.user_email?.message} />}
    </div>
    <div className="mb-6">
      <label className="block text-light-text dark:text-dark-text" htmlFor="message">Write Your Message</label>
      <textarea {...register("user_message", {
  required: 'Please input your last name',
  maxLength: {
    value: 150,
    message: " Message can be max 150 characters"
  },
  minLength: {
    value: 10,
    message: "Message must be at least 10 characters"
  },
})}  className="appearance-none bg-transparent w-full py-2 outline-none border-b-[0.5px] border-[#454545]"  name="user_message" />
      {errors?.user_message && <Formalert message={errors?.user_message?.message} />}
    </div>
    <ReCAPTCHA
    sitekey="6Lfb-HkpAAAAAOzuAk0ea5yHP_onzDZ-P8ubByPI"
    onChange={() => setIsVerified(true)}
    
  />
  <div>{errors.root && <p className="text-red-500 text-xs italic my-2">{errors.root.message}</p>}</div>
    <div  className="flex justify-center">
       
        <button type="submit"  className=" w-[60%] mb-2 mt-8 md:mb-0 px-8 py-2 text-[#0C0C0C] text-base font-medium rounded-lg bg-light-primary" >Submit</button>
        </div>
 
  </form>
  </div>
  </div>
  )
}

export default InquiryForm