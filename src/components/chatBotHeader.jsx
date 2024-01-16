import chatBotIcon from '../assets/Ellipse 3.png'

export const ChatBotHeader = () => {
  return (
    <>
    <div>
        <div className='px-2 py-4  flex  space-x-2'>
            <img src={chatBotIcon} alt="chatbotIcon" />
            <div>
                <h2 className='text-xl font-bold uppercase'>Customer Service</h2>
                <p>We reply immediately</p>
            </div>
        </div>
    </div>
    </>
  )
}
