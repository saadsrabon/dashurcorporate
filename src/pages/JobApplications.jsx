import { useEffect, useState } from "react"
import CardWrapper from "../components/CardWrapper"
import axios from "axios"
import { formatTimestamp } from "../utilities/utility"


export const JobApplications = () => {

  
   

    const [applications, setApplications] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [timeRange, setTimeRange] = useState('all');
   

    useEffect(() => {
       axios.get("https://dashur-backend.vercel.app/get-files")
        .then((res)=>{setApplications(res.data)
        }
        )

        
    }, [])

      useEffect(() => {
        function filterItemsByTimeRange(timeRange) {
            const now = new Date();
            let thresholdDate;
          
            switch (timeRange) {
              case 'all':
                return applications?.data;
              case 'week':
                thresholdDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      return applications?.data?.filter(item => new Date(item.publishedAt) >= thresholdDate);
              case 'month':
                thresholdDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                return applications?.data?.filter(item => new Date(item.publishedAt) >= thresholdDate);
              default:
                return [];
            }
          }
        const filteredApplications = filterItemsByTimeRange(timeRange);
             setFilteredData(filteredApplications);
      }, [timeRange, applications]);

    
      
  return (
    <>
        <div className="mt-48 mb-24 "></div>

        <div>
            <h2 className="text-light-text dark:text-dark-text font-bold text-5xl  text-center ">Job Applications</h2>
        </div>
       <div className="flex justify-center my-8 space-x-4  ">
        <span onClick={()=>setTimeRange('all')} className=" text-bold text-base text-light-primary ">All</span>
        <span onClick={()=>setTimeRange('month')} className=" text-bold text-base  text-light-text dark:text-dark-text">This Month</span>
        <span onClick={()=>setTimeRange('week')} className=" text-bold text-base text-light-text dark:text-dark-text ">This Week</span>
       </div>
    <div className=" w-[90%] mx-auto mb-64">
        {
            filteredData?.length>0 ? filteredData?.map((application) => <CardWrapper key={application?._id}>
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
                    <a href={`https://dashur-backend.vercel.app/files/${application?.pdf}`} className="text-light-text dark:text-dark-text font-bold ">Show Resume</a> 
                </div>
                <div>
                   <p className="text-light-text dark:text-dark-text ">Date</p>
                    <h2 className="text-light-text dark:text-dark-text font-bold text-center">{formatTimestamp(application?.publishedAt)}</h2> 
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
