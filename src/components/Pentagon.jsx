import darklogo from "../assets/updownlight.png";

const Pentagon = () => {
    return (
      <div className="pentagon rounded-lg">
        <div className="pentagons border-[#02A9F7;] rounded-3xl flex justify-center items-center bg-black p-8 border w-[470px] h-[470px]">
            <img src={darklogo} alt="" />
        </div>
        <div className="dot top-left" style={{
          position: "absolute",
          top: "37%",
          left: "0%",
        //   transform: "translate(-50%, 25%)",
        }} />
        <div className="dot top-right" style={{
          position: "absolute",
          top: "0",
          right: "50%",
          transform: "translate(50%, 25%)",
        }} />
        <div className="dot bottom-right" style={{
          position: "absolute",
          bottom: "0",
          right: "18%",
        }} />
        <div className="dot bottom-left" style={{
          position: "absolute",
          bottom: "0",
          left: "18%",
        }} />
        <div className="dot center" style={{
          position: "absolute",
          right: "-2%",
          top: "38%",
          transform: "translate(-50%, -50%)",
        }} />
      </div>
    );
  };

export default Pentagon