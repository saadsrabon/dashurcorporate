import chatBotIcon from '../assets/Ellipse 3.png'

export const ChatBotHeader = () => {
  return (
    <>
    <div>
        <div className='px-4 py-4  flex  space-x-3 '>
            <img className='h-[56px]' src={chatBotIcon} alt="chatbotIcon" />
            <div>
                <h2 className='text-xl font-bold uppercase'>Customer Service</h2>
                <p className='py-1'>We reply immediately</p>
            </div>
        </div>
    </div>
    </>
  )
}
