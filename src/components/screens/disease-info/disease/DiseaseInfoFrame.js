import React, { useState } from "react";
import Treatment from "./Treatment";
import OverviewPara from "./OverviewPara";

// Import images
import symptomsImg from "../../../../images/diseases-info/symptoms.svg";
import causeImg from "../../../../images/diseases-info/cause.svg";
import riskImg from "../../../../images/diseases-info/risk.svg";
import treatmentImg from "../../../../images/diseases-info/treatment.svg";
import preventionImg from "../../../../images/diseases-info/prevention.svg";
import diagnosisImg from "../../../../images/diseases-info/diagnosis.svg";
import Swiper from "./Swiper";

const DiseaseInfoFrame = ({ data }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const changeTabIndex = (index) => {
    setTabIndex(index);
  };

  const getData = (tabIndex) => {
    if (tabIndex === 0) {
      return <Treatment data={data.symptoms} titleImgSrc={symptomsImg} />;
    } else if (tabIndex === 1) {
      return <Treatment data={data.Causes} titleImgSrc={causeImg} />;
    } else if (tabIndex === 2) {
      return <Treatment data={data.Riskfactor} titleImgSrc={riskImg} />;
    } else if (tabIndex === 3) {
      return <Treatment data={data.treatment} titleImgSrc={treatmentImg} />;
    } else if (tabIndex === 4) {
      return <Treatment data={data.Prevention} titleImgSrc={preventionImg} />;
    } else {
      return <Treatment data={data.Diagnosis} titleImgSrc={diagnosisImg} />;
    }
  };

  const tabNames = [
    "Symptoms",
    "Causes",
    "Riskfactor",
    "Treatment",
    "Prevention",
    "Diagnosis",
  ];

  return (
    <div id="info-actinic">
      <div className="header">
        <h1>{data.skintype}</h1>
      </div>
      <div className="first-section">
        <div className="right">
          <div className="title">
            <div className="side-line"></div>
            <h3>Overview</h3>
          </div>
          <OverviewPara data={data} />
        </div>
      </div>
      <div className="swiper-section p-2 container-center ">
        <Swiper images={data?.Images} />
      </div>
      <div className="third-section my-3">
        <div className="title my-2">
          <div className="side-line"></div>
          <h3>Important Info</h3>
        </div>
        <div className="tabs skin-disease-tabs">
          {tabNames.map((tabName, index) => (
            <div
              className={`tab p-1 ${tabIndex === index ? "selected" : ""}`}
              onClick={() => {
                changeTabIndex(index);
              }}
              key={index}
            >
              <h3 className="fw-n">{tabName}</h3>
            </div>
          ))}
        </div>
        <div className="info p-1 my-3">{getData(tabIndex)}</div>
      </div>
    </div>
  );
};

export default DiseaseInfoFrame;
