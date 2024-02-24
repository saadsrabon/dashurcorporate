import IconText from "../components/IconText"
import IconWrapper from "../components/IconWrapper"
import eclipse from "../assets/Ellipse 60.png"

export const Capablities = () => {
  const item = [
  
   
    {
        "name": "Python",
        "imageLink": "https://i.ibb.co/B6WPHwM/python-127-svgrepo-com.png" ,
    },
   
    {
        "name": "Java",
        "imageLink": "https://i.ibb.co/9ghGFvy/Vector.png" ,
    },
   
    {
        "name": "React JS",
        "imageLink": "https://i.ibb.co/GdSdVvp/Group.png" ,
    },
   
    {
        "name": "Native Script",
        "imageLink": "https://i.ibb.co/7W2j1fG/Layer-2.png" ,
    },
   
    {
        "name": "Django",
        "imageLink": "https://i.ibb.co/R9Z2JjB/5151e0c8492e5103c096af88a51f62ed.png" ,
    },
   
    {
        "name": "Laravel",
        "imageLink":"https://i.ibb.co/G5J7sFJ/Vector-2.png" ,
    },
   
    {
        "name": "Ionic",
        "imageLink":"https://i.ibb.co/J5Zzcdm/Vector-1.png" ,
    },
    {
      name:"Go",
      imageLink:"https://i.ibb.co/QYZ47WY/go.png"
    }
   
]

const certifications = ["Ultimate AWS Cloud","Mac OS Terminal","Python Intermediate" ,"Python Intermediate","GCP Associate Cloud","Github/Git","Front end Development","Full Stack Development" ,"Node JS"]
  return (
    <section className=" mt-48 mb-48  mx-auto">
        <h2 className=' text-5xl  text-light-text text-center py-4 text-[24px] md:text-5xl uppercase font-sans font-bold  dark:text-dark-text mb-8'>Capabilities</h2>
   
<div>
  <p className="bg-light-primary py-2 text-4xl font-bold text-center uppercase ">Technologies</p>
</div>
  <div className="w-[80%] mx-auto lg:mt-16">
     <IconWrapper>
     <div className="" >
                    <div  className='flex     px-3.5 py-2  '>
                   <div className="flex justify-between items-center space-x-8">
                  <div className="flex items-center space-x-2">
                  <img className="w-[80%] grow-0" src="https://i.ibb.co/PrFVMyw/Group-1.png" alt="" />
                   <h2 className="text-2xl text-dark-text">IOS</h2>
                  </div>
                  <div className="">
                  <img className=" grow-0" src={eclipse} alt="Group-1" border="0"/>
                  </div>
                  <div className="flex space-x-3">
                  <img className="w-[80%] grow-0" src="https://i.ibb.co/bH7g1jt/b75708d097f2188dff6617b0f00f7c43.png" alt="b75708d097f2188dff6617b0f00f7c43" border="0"/>
                   <h2  className="  text-dark-text text-2xl">Android</h2>
                  </div>
                   </div>
               
                </div>
                </div>
      </IconWrapper>
   {
      item.map((item, index) => (
        <IconWrapper key={index}>
        <IconText key={index} item={item} />
        </IconWrapper>
      ))
   }
   </div>


   <div>
  <p className="bg-light-primary py-2 text-4xl font-bold text-center uppercase mt-16 ">CERTIFICATIONS</p>
</div>

<div className="w-[80%] mx-auto lg:mt-16 ">
    {
        certifications.map((certification, index) => (
          <IconWrapper key={index}>
          <div>
            <p className="text-2xl">{certification}</p>
          </div>
          </IconWrapper>
        ))

    }
</div>
    </section>
  )
}
