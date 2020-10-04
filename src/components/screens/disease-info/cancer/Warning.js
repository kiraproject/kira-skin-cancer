import React from "react";

const Warning = ({ data }) => {
  return (
    <div className="warning-signs">
      <h3 className="fw-n my-2 text-primary">{data?.warning?.heading}</h3>
      <div className="signs">
        {data?.warning?.warnings?.map((war, index) => (
          <div className="sign my-1" key={index}>
            <h4>{war?.title}</h4>
            <p className="text-secondary">{war?.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Warning;
