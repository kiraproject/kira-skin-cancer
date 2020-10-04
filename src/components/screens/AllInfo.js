import React, { useCallback, useEffect, useState } from "react";
import { data } from "./disease-info/cancer/data";
import { diseaseData } from "./disease-info/disease/diseaseData";

const AllInfo = () => {
  const [skinCancerData, setSkinCancerData] = useState([]);
  const [skinDiseaseData, setSkinDiseaseData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllUrls = useCallback(() => {
    setLoading(true);
    setSkinCancerData(
      data.map((doc) => ({
        title: doc.cancerType,
        route: doc.route,
      }))
      // .slice(0, 1)
    );
    setSkinDiseaseData(
      diseaseData.map((doc) => ({
        title: doc.skintype,
        route: doc.route,
      }))
      // .slice(0, 1)
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(false);
    getAllUrls();
  }, [getAllUrls]);

  const [tabIndex, setTabIndex] = useState(0);

  const changeTabIndex = (index) => {
    setTabIndex(index);
  };

  const category = ["Skin Cancer", "Skin Diseases"];

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div id="all-info">
      <div className="header">
        <div className="title">
          <div className="side-line"></div>
          <h3>Skin Cancer Information</h3>
        </div>
        <div className="middle-section my-3">
          <div className="tabs">
            {category.map((cat, index) => (
              <div
                key={index}
                className={`tab p-1 ${tabIndex === index ? "selected" : ""}`}
                onClick={() => {
                  changeTabIndex(index);
                }}
              >
                <h3 className="fw-n">{cat}</h3>
              </div>
            ))}
          </div>
          <div className="cards">
            {tabIndex === 0
              ? skinCancerData?.map((cancer, index) => (
                  <a href={cancer?.route} className=" my-1 p-1" key={index}>
                    {cancer?.title}
                  </a>
                ))
              : skinDiseaseData?.map((disease, index) => (
                  <a href={disease?.route} className="my-1 p-1" key={index}>
                    {disease?.title}
                  </a>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInfo;
