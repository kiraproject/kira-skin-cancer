import React, { useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useState } from "react";
import InputFrame from "./InputFrame";
import * as tf from "@tensorflow/tfjs";

const GetTested = () => {
  const [isLoading, setLoading] = useState(true);
  const [model, setModel] = useState(null);

  const loadModel = async () => {
    const mod = await tf.loadLayersModel("./model/model.json");
    setModel(mod);
  };

  useEffect(() => {
    setLoading(true);
    loadModel();
    setLoading(false);
  }, [setLoading]);

  return (
    <div id="get-tested">
      {isLoading ? (
        <div className="container py-3 my-3" style={{ textAlign: "center" }}>
          <Loader type="Oval" color="#ff2e63" height={80} width={40} />
        </div>
      ) : (
        <InputFrame model={model} />
      )}
    </div>
  );
};

export default GetTested;
