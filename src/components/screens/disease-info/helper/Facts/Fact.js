import React from "react";
// import indiaImg from "../../../../../images/india.svg";

const Fact = ({ data }) => {
  return (
    <div className="container p-1">
      {data?.fact?.imgUrl && <img src={data?.fact?.imgUrl} alt="" />}
      <div className="right">
        <h3 className="">{data?.fact?.heading}</h3>
        <h1 className="font-5">{data?.fact?.bigText}</h1>
        <h3 className="fw-n">{data?.fact?.finalText}</h3>
      </div>
    </div>
  );
};

export default Fact;
