/* eslint-disable react/prop-types */


export default function CardWrapper({children}) {
  return (
     <div className="rounded-lg border border-solid border-white border-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 bg-white bg-opacity-20 shadow-xl px-6 py-10 my-8 ">
    {
        children
    }
     </div>
  )
}
