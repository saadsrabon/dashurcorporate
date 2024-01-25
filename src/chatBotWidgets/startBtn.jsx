/* eslint-disable react/prop-types */


const StartBtn = (props) => {
    const {handleAbout} = props.actions;
  return (
    <div className="flex space-x-2">
    <button onClick={()=>handleAbout()} className='px-4 py-2 border border-light-primary'>About Us</button>
    <button className='px-4 py-2 border border-light-primary'>Markets</button>
    <button className='px-4 py-2 border border-light-primary'>Services</button>
  </div>
  )
}

export default StartBtn