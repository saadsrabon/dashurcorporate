/* eslint-disable react/prop-types */


const StartBtn = (props) => {
    const {handleAbout ,handleMarkets,handleServices,handleContacts} = props.actions;
  return (
    <div className="grid space-y-4 ">
    <button onClick={()=>handleAbout()} className='px-3 py-1 border border-light-primary hover:text-light-primary   rounded-lg'>About</button>
    <button onClick={()=>handleMarkets()} className='px-3 py-1 border border-light-primary hover:text-light-primary  rounded-lg'>Markets</button>
    <button onClick={()=>handleServices()} className='px-2 py-1 border border-light-primary hover:text-light-primary  rounded-lg'>Services</button>
    <button onClick={()=>handleContacts()} className='px-3 py-1 border border-light-primary hover:text-light-primary  rounded-lg'>Contacts</button>
  </div>
  )
}

export default StartBtn