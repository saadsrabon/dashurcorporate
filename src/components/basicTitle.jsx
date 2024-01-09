/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const BasicTitle = ({title}) => {
  return (
    <div className="flex justify-center items-center w-3/4">
        <h2 className="text-light-text text-center py-4 text-5xl uppercase font-sans font-bold leading-[64px] dark:text-dark-text">{title}</h2>
    </div>
  )
}

export default BasicTitle