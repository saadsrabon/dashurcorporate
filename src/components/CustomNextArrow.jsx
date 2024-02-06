/* eslint-disable react/prop-types */
export const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className + " -mr-10 bg-[#2F2F2F] hover:bg-light-primary "}
      style={{ ...style, width: "40px", height: "40px" ,display:"flex",justifyContent:"center",alignItems:"center" ,borderRadius:"50%",zIndex:"10"}}
      onClick={onClick}
    />
  )
}
