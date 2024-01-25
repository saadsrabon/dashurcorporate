import { createChatBotMessage } from 'react-chatbot-kit';
import { ChatBotHeader } from '../components/chatBotHeader';
import StartBtn from '../chatBotWidgets/startBtn';
import CustomMesages from '../chatBotWidgets/CustomMesages';
import Markets from '../chatBotWidgets/Markets';

const config = {
  initialMessages: [createChatBotMessage(`Welcome to Dashur AI Chatbot`)],
  botName: "Dashur Ai Chatbot",
  
  customComponents: {
    // Replaces the default header
    header: () => <ChatBotHeader/>,
    // Replaces the default bot avatar
    botAvatar: () => "",
    userAvatar:()=>"",
   
  },
  customMessages: {
    custom: (props) => <CustomMesages {...props} />,
  },
  widgets:[
    {
      widgetName:"startBtnn",
      widgetFunc:(props)=> <StartBtn {...props}/>
    },
    {
      widgetName:"chips",
      widgetFunc:(props)=> <Markets {...props}/>
    },
  ],
  }
 


export default config;