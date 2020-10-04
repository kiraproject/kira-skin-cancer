import React, { useState } from "react";
import Warning from "./Warning";
import Risk from "./Risk";
import Treatment from "./Treatment";
import QuickLinks from "../helper/QuickLinks";
import OverviewPara from "../helper/OverviewPara";
import FAQS from "./FAQS";
import Fact from "../helper/Facts/Fact";

const InfoFrame = ({ data }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const changeTabIndex = (index) => {
    setTabIndex(index);
  };

  const getData = (tabIndex) => {
    if (tabIndex === 0) {
      return <Warning data={data} />;
    } else if (tabIndex === 1) {
      return <Risk data={data} />;
    } else {
      return <Treatment data={data} />;
    }
  };

  return (
    <div id="info-actinic">
      <div className="header">
        <h1>{data.cancerType}</h1>
      </div>
      <div className="first-section">
        <div className="left">
          <QuickLinks data={data} />
        </div>
        <div className="right">
          <div className="title">
            <div className="side-line"></div>
            <h3>Overview</h3>
          </div>
          <OverviewPara data={data} />
        </div>
      </div>
      <div className="second-section p-1 container-center">
        <Fact data={data} />
      </div>
      <div className="third-section my-3">
        <div className="title my-2">
          <div className="side-line"></div>
          <h3>Important Info</h3>
        </div>
        <div className="tabs">
          <div
            className={`tab p-1 ${tabIndex === 0 ? "selected" : ""}`}
            onClick={() => {
              changeTabIndex(0);
            }}
          >
            <h3 className="fw-n">Warning Signs</h3>
          </div>
          <div
            className={`tab p-1 ${tabIndex === 1 ? "selected" : ""}`}
            onClick={() => {
              changeTabIndex(1);
            }}
          >
            <h3 className="fw-n">Risk Factors</h3>
          </div>
          <div
            className={`tab p-1 ${tabIndex === 2 ? "selected" : ""}`}
            onClick={() => {
              changeTabIndex(2);
            }}
          >
            <h3 className="fw-n">Treatment</h3>
          </div>
        </div>
        <div className="info p-1 my-3">{getData(tabIndex)}</div>
      </div>
      <div className="faqs-section my-3">
        <div className="title my-2">
          <div className="side-line"></div>
          <h3>FAQs</h3>
        </div>
        <FAQS data={data} />
      </div>
    </div>
  );
};

export default InfoFrame;
