import React from "react";
import landingImg from "../../images/landing.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div id="home">
      <div className="wrapper">
        <div className="left">
          <h1>KIRA Skin Cancer Foundation</h1>
          <div className="btns">
            <Link to="/get-tested">
              <div className="btn1">
                <h3>Get Tested</h3>
              </div>
            </Link>
            <Link to="/find-a-dermatologist">
              <div className="btn2">
                <h3>Find a Dermatologist</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="right">
          <img src={landingImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
