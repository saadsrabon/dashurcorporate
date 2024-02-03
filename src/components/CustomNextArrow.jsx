/* eslint-disable react/prop-types */
export const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className + " -mr-10"}
      style={{ ...style, background: "#2F2F2F", width: "40px", height: "40px" ,display:"flex",justifyContent:"center",alignItems:"center" ,borderRadius:"50%",zIndex:"10"}}
      onClick={onClick}
    />
  )
}
