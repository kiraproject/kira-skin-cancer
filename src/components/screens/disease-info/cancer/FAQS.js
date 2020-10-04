import React from "react";
import menFaq from "../../../../images/men-faq.svg";
import womenFaq from "../../../../images/women-faq.svg";

const FAQS = ({ data }) => {
  const checkSide = (index) => (index % 2 === 0 ? 0 : 1);

  return (
    <div className="allfaqs p-2">
      {data?.faqs?.map((faq, index) => (
        <div
          className={`faq ${
            checkSide(index) === 0 ? "left-faq" : "right-faq"
          } my-3 p-2`}
          key={index}
          id={`${data?.quickLinks[index].split(" ")[0]}`}
        >
          <div className="question">
            <img src={checkSide(index) === 0 ? menFaq : womenFaq} alt="" />
            <h3>{data?.quickLinks[index]}</h3>
          </div>
          <div className="answer">
            <div className="text">
              <p className="text-secondary">{faq?.text}</p>
            </div>
            <div className="bullet-points">
              {faq?.bulletPoints?.map((points, index) => (
                <div className="my-1" key={index}>
                  <h4 className="fw-n">
                    <i className="fas fa-circle text-primary"></i>
                    {points}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQS;
