/* eslint-disable react/prop-types */

import { AnimatePresence ,motion} from "framer-motion";


export default function CardWrapper({children}) {
  return (
    <AnimatePresence mode="wait"
    
    >
     <motion.div
      
       initial={{ y: 10, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       exit={{ y: -10, opacity: 0 }}
       transition={{ duration: 0.3 }} className="rounded-lg border border-solid border-white border-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 bg-white bg-opacity-20 shadow-xl px-6 py-10 my-8 ">
    {
        children
    }
     </motion.div>
     </AnimatePresence>
  )
}
