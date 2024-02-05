/* eslint-disable react/prop-types */
export const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className + " -mr-10 shadow-lg drop-shadow-lg hover:bg-light-primary new"}
      style={{ ...style, width: "40px", height: "40px" ,display:"flex",justifyContent:"center",alignItems:"center" ,borderRadius:"50%",zIndex:"10"}}
      onClick={onClick}
    />
  )
}
