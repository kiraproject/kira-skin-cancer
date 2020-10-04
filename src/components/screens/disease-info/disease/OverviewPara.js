import React from "react";

const OverviewPara = ({ data }) => {
  return (
    <div>
      {data.description.map((para, index) => (
        <p className="lead-text" key={index}>
          {para}
        </p>
      ))}
    </div>
  );
};

export default OverviewPara;
