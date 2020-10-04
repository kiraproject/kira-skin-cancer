import React from "react";

const QuickLinks = ({ data }) => {
  return (
    <div className="quick-links">
      {data.quickLinks.map((link, index) => (
        <div className="quick-link" key={index}>
          <a href={`#${link.split(" ")[0]}`}>
            <i className="fas fa-map-marker"></i> {link}
          </a>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
