import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { predict } from "./modelLogic";
import Loader from "react-loader-spinner";

const InputFrame = ({ model }) => {
  let selectedImgRef = useRef(null);

  const [error, setError] = useState(null);
  const [imgFileUrl, setImgFileUrl] = useState("");
  const [predLoading, setPredLoading] = useState(false);
  const [prediction, setPrediction] = useState([]);

  const onFileChange = (e) => {
    const { files } = e.target;

    if (files[0].type !== "image/jpeg" && files[0].type !== "image/png") {
      setError("Only 'jpeg/png' format images");
      return setImgFileUrl("");
    }
    setImgFileUrl(URL.createObjectURL(files[0]));
  };

  // Handle predict

  const handlePredict = (e) => {
    setPredLoading(true);
    predict(selectedImgRef, model).then((top3) => {
      setTimeout(() => {
        setPredLoading(false);
        setPrediction(top3);
      }, 3000);
    });
  };

  return (
    <div className="inputframe">
      <div className="header">
        <h2>Get Tested For Skin Cancer</h2>
      </div>
      {imgFileUrl !== "" && (
        <div className="middle-section my-2">
          <div className="left">
            <div className="title">
              <div className="side-line"></div>
              <h4 className="fw-n">Image</h4>
            </div>
            <img
              src={imgFileUrl}
              ref={(ele) => (selectedImgRef = ele)}
              className="pred-img my-1"
              alt=""
            />
          </div>
          <div className="right">
            {predLoading ? (
              <div className="container" style={{ textAlign: "center" }}>
                <Loader type="Oval" color="#ff2e63" height={80} width={40} />
              </div>
            ) : (
              prediction.length !== 0 && (
                <div>
                  <div className="title">
                    <div className="side-line"></div>
                    <h4 className="fw-n">Predictions</h4>
                  </div>
                  <div className="predictions">
                    {prediction !== [] &&
                      prediction?.map((pred, index) => (
                        <div
                          className={`prediction ${
                            index === 0 && "green-pred"
                          }`}
                          key={index}
                        >
                          <h4 className={`text-secondary`}>
                            {pred?.className}
                          </h4>
                          <h4 className="fw-n text-secondary">
                            {(pred?.probability * 100).toFixed(2)}%
                          </h4>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
      <div className="third-section">
        <div className="btns">
          <div className="btn-1-wrapper">
            <input type="file" className="btn1" onChange={onFileChange}></input>
            {error && (
              <h6 className="fw-n my-1 error-msg" style={{ color: "red" }}>
                {error}
              </h6>
            )}
          </div>
          {imgFileUrl && (
            <div>
              <div className="btn2" onClick={handlePredict}>
                <h3>Predict</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputFrame;
