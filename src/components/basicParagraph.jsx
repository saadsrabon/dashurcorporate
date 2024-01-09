/* eslint-disable react/prop-types */


const BasicParagraph = ({content}) => {
  return (
    <div>
        <p className='text-[#7D7D7D] text-base leading-6 dark:text-[#D2D2D2]'>
      {content}
        </p>
        </div>
  )
}

export default BasicParagraph