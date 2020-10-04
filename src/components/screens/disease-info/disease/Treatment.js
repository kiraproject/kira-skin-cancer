import React from "react";

const Treatment = ({ data, titleImgSrc }) => {
  return (
    <div className="treatment">
      <div className="title-wrapper">
        <img src={titleImgSrc} alt="" />
        <h3 className="fw-n my-2 text-primary">{data?.title}</h3>
      </div>
      <ul className="treatments my-2">
        {data?.points?.map((point, index) => (
          <li className="treat my-1" key={index}>
            <i className="fas fa-circle text-primary"></i>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Treatment;
