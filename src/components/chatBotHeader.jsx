import { useContext } from 'react';
import chatBotIcon from '../assets/Ellipse 3.png'
import { ChatbotContext } from '../App';

export const ChatBotHeader = () => {
    const chatBotdecide = useContext(ChatbotContext);
    const {setChatbotOpen}=chatBotdecide

    const handleClick=()=>{
        console.log('clicked')
        setChatbotOpen(prev=>!prev)
    }

  return (
    <>
    <div className='relative z-50'>
    <svg onClick={handleClick} className='absolute top-[-16px] right-2' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<mask id="mask0_375_197"  maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
<rect width="36" height="36" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_375_197)">
<path d="M10.5 31.498C10.075 31.498 9.71875 31.3543 9.43125 31.0668C9.14375 30.7793 9 30.423 9 29.998C9 29.573 9.14375 29.2168 9.43125 28.9293C9.71875 28.6418 10.075 28.498 10.5 28.498H25.5C25.925 28.498 26.2813 28.6418 26.5688 28.9293C26.8563 29.2168 27 29.573 27 29.998C27 30.423 26.8563 30.7793 26.5688 31.0668C26.2813 31.3543 25.925 31.498 25.5 31.498H10.5Z" fill="white"/>
</g>
</svg>
        <div className='px-4 py-4 flex  space-x-3 z-[500] '>
            <div className='relative'>
            <img  className='h-[56px] ' src={chatBotIcon} alt="chatbotIcon" />
            <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-1 left-11 border-[3px] border-white"></span>
                    <span className="h-4 w-4 bg-green-500 absolute rounded-full left-11 bottom-1 animate-ping"></span>
            </div>
           
          
            <div className='flex justify-center items-center'>
                <h2 className='text-xl font-bold uppercase text-center'>Mr. Dash </h2>
               
            </div>
        </div>
    </div>
    </>
  )
}
