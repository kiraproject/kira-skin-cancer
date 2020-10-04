import React from "react";

const Treatment = ({ data }) => {
  return (
    <div className="treatment">
      <h3 className="fw-n my-2 text-primary">{data?.treatment?.heading}</h3>
      {data?.treatment?.para?.map((par, index) => (
        <p className="text-secondary my-1" key={index}>
          {par}
        </p>
      ))}
      <ul className="treatments my-2">
        {data?.treatment?.treatments?.map((treat, index) => (
          <li className="treat my-1" key={index}>
            <i class="fas fa-circle text-primary"></i>
            {treat}
          </li>
        ))}
      </ul>
      <a
        href={data?.treatment?.referLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-external-link-alt text-secondary external-ref">
          <span className="text-primary m-1">For more Info</span>
        </i>
      </a>
    </div>
  );
};

export default Treatment;
