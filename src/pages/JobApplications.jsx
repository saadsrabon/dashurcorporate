import { useEffect, useState } from "react"
import CardWrapper from "../components/CardWrapper"
import axios from "axios"


export const JobApplications = () => {

    const [applications, setApplications] = useState([])
    console.log(applications)

    useEffect(() => {
       axios.get("http://localhost:5000/get-files")
        .then((res)=>{setApplications(res.data)
        }
        )

        
    }, [])
  return (
    <>
        <div className="mt-48 mb-24 "></div>

        <div>
            <h2 className="text-light-text dark:text-dark-text font-bold text-5xl  text-center ">Job Applications</h2>
        </div>
       <div className="flex justify-center my-8 space-x-4 ">
        <span className=" text-bold text-base text-light-primary ">All</span>
        <span className=" text-bold text-base  text-light-text dark:text-dark-text">This Month</span>
        <span className=" text-bold text-base text-light-text dark:text-dark-text ">This Week</span>
       </div>
    <div className=" w-[90%] mx-auto">
        {
            applications?.data?.length>0 ? applications?.data?.map((application) => <CardWrapper key={application?._id}>
            <div className="flex justify-around ">
                <div>
                   <p className="text-light-text dark:text-dark-text ">Name</p>
                    <h2 className="text-light-text dark:text-dark-text font-bold ">{application?.name}</h2> 
                </div>
                <div>
                   <p className="text-light-text dark:text-dark-text ">Email</p>
                    <h2 className="text-light-text dark:text-dark-text font-bold ">{application?.email}</h2> 
                </div>
                <div>
                   <p className="text-light-text dark:text-dark-text ">Phone Number</p>
                    <h2 className="text-light-text dark:text-dark-text font-bold ">{application?.phone}</h2> 
                </div>
                <div>
                   <p className="text-light-text dark:text-dark-text ">Resume</p>
                    <a href={`http://localhost:5000/files/${application?.pdf}`} className="text-light-text dark:text-dark-text font-bold ">Show Resume</a> 
                </div>
                <div>
                   <p className="text-light-text dark:text-dark-text ">Date</p>
                    <h2 className="text-light-text dark:text-dark-text font-bold ">02/10/2024</h2> 
                </div>
                
            </div>
           </CardWrapper>  ): <h1 className="text-center mt-24 text-5xl mb-64 text-red-400">No Applications !</h1>
        }
    
    {/* <CardWrapper>
        <div className="flex justify-around ">
            <div>
               <p className="text-light-text dark:text-dark-text ">Name</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">John Smith</h2> 
            </div>
            <div>
               <p className="text-light-text dark:text-dark-text ">Email</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">John Smith</h2> 
            </div>
            <div>
               <p className="text-light-text dark:text-dark-text ">Phone Number</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">138737947982734323</h2> 
            </div>
            <div>
               <p className="text-light-text dark:text-dark-text ">Resume</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">John Smith</h2> 
            </div>
            <div>
               <p className="text-light-text dark:text-dark-text ">Date</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">01/02/2024</h2> 
            </div>
            
        </div>
       </CardWrapper>
    <CardWrapper>
        <div className="flex justify-around ">
            <div>
               <p className="text-light-text dark:text-dark-text ">Name</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">John Smith</h2> 
            </div>
            <div>
               <p className="text-light-text dark:text-dark-text ">Email</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">John Smith</h2> 
            </div>
            <div>
               <p className="text-light-text dark:text-dark-text ">Phone Number</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">138737947982734323</h2> 
            </div>
            <div>
               <p className="text-light-text dark:text-dark-text ">Resume</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">John Smith</h2> 
            </div>
            <div>
               <p className="text-light-text dark:text-dark-text ">Date</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">01/02/2024</h2> 
            </div>
            
        </div>
       </CardWrapper>
    <CardWrapper>
        <div className="flex justify-around ">
            <div>
               <p className="text-light-text dark:text-dark-text ">Name</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">John Smith</h2> 
            </div>
            <div>
               <p className="text-light-text dark:text-dark-text ">Email</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">John Smith</h2> 
            </div>
            <div>
               <p className="text-light-text dark:text-dark-text ">Phone Number</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">138737947982734323</h2> 
            </div>
            <div>
               <p className="text-light-text dark:text-dark-text ">Resume</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">John Smith</h2> 
            </div>
            <div>
               <p className="text-light-text dark:text-dark-text ">Date</p>
                <h2 className="text-light-text dark:text-dark-text font-bold ">01/02/2024</h2> 
            </div>
            
        </div>
       </CardWrapper> */}
    </div>
       </>
  )
}
