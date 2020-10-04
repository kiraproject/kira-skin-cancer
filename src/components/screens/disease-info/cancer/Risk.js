import React from "react";

const Risk = ({ data }) => {
  return (
    <div className="risk-signs">
      {data?.riskFactor?.para.map((par, index) => (
        <p className="text-secondary my-1" key={index}>
          {par}
        </p>
      ))}
      <h3 className="my-2 text-primary fw-n text-upper">
        {data?.riskFactor?.heading}
      </h3>
      <div className="risks">
        {data?.riskFactor?.risks?.map((risk, index) => (
          <div className="risk my-1" key={index}>
            <h4>
              <i className="fas fa-circle text-primary"></i>
              <span className="text-secondary fw-b">{risk?.title}</span>
              {risk?.text}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Risk;
