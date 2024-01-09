
import banner from '../assets/hero.png'
const Home = () => {
  return (
    <>
    <div className=" mx-auto py-24">
        <h2 className="text-light-text text-6xl  font-bold uppercase dark:text-dark-text text-center leading-[78px]">Empowering Innovation, Connecting <br></br>the Future With Dashur ai</h2>
    </div>
    <div className="relative w-[95%] mx-auto">
  <img  src={banner} alt="Your Image" className="w-full h-auto " />

  <div className="absolute bottom-[-7%] left-0 right-0 flex justify-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-16 h-16 rounded-full shadow-lg flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none">
<path d="M10 1V25M10 25L19 16M10 25L1 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </button>
  </div>
</div>

    </>
    
  )
}

export default Home