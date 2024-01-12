
import Chips from "../components/chips"


const About = () => {
  return (
    <div className="w-[80%] mx-auto my-24">
      <div className="grid grid-cols-2">
           <div>
            <img src="" alt="" />
           </div>

            <div className="flex flex-col items-center">
              <Chips title="About Us"/>
              <div className="flex justify-center items-center w-3/4">
        <h2 className="text-light-text text-center py-4 text-3xl uppercase font-sans font-bold  dark:text-dark-text">Connecting Dreams, Crafting Realities</h2>
    </div>
              <p></p>     
      </div>
    </div>
    </div>
  )
}

export default About