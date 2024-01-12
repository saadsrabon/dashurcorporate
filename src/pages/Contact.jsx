import Chips from "../components/chips"


const Contact = () => {
  return (
    <div className="flex flex-col items-center w-[80%] mx-auto my-24">
          <div className="flex flex-col  space-y-4 justify-center items-center">
              <div className="flex ">
              <Chips title="Contact Us"/>
              </div>
              <div className="flex  flex-col items-center w-2/4 ">
        <h2 className="text-light-text text-center leading-snug py-4 text-5xl uppercase font-sans font-bold  dark:text-dark-text">Connecting Dreams, Crafting Realities</h2>
        <p className="text-light-text dark:text-dark-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ipsum odit cupiditate nostrum delectus a, asperiores sequi nesciunt ullam eius, quis molestiae eos labore voluptatem officiis. Tenetur, eos, maiores odit optio, fuga provident delectus nam est laudantium assumenda saepe consequatur.</p>     
    </div>
             
      </div>
    </div>
  )
}

export default Contact