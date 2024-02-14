/* eslint-disable react/prop-types */
export const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    
  return (
    <div
      className={className + " hover:bg-light-primary shadow-lg drop-shadow-lg -mr-10 bg-[#fff] dark:bg-[#2f2f2f] dark:hover:bg-light-primary"}
      style={{ ...style,  width: "40px", height: "40px" ,display:"flex",justifyContent:"center",alignItems:"center" ,borderRadius:"50%",zIndex:"10"}}
      onClick={onClick}
    />
  )
}
