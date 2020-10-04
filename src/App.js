import React from "react";
import "./css/main.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import About from "./components/screens/About";
import InfoFrame from "./components/screens/disease-info/cancer/InfoFrame";
import Navbar from "./components/screens/helpers/Navbar";
import { data } from "./components/screens/disease-info/cancer/data";
import { diseaseData } from "./components/screens/disease-info/disease/diseaseData";
import DiseaseInfoFrame from "./components/screens/disease-info/disease/DiseaseInfoFrame";
import AllInfo from "./components/screens/AllInfo";
import FindDermatologist from "./components/screens/findDerma/FindDermatologist";
import GetTested from "./components/screens/getTesed/GetTested";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="padded-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/info" component={AllInfo} />
            <Route exact path="/get-tested" component={GetTested} />
            <Route
              exact
              path="/find-a-dermatologist"
              component={FindDermatologist}
            />
            <Route
              exact
              path="/info/actinic-keratosis"
              render={() => <InfoFrame data={data[0]} />}
            />
            <Route
              exact
              path="/info/basal-cell-carcinoma"
              render={() => <InfoFrame data={data[1]} />}
            />
            <Route
              exact
              path="/info/melanoma"
              render={() => <InfoFrame data={data[2]} />}
            />
            <Route
              exact
              path="/info/merkel-cell-carcinoma"
              render={() => <InfoFrame data={data[3]} />}
            />
            <Route
              exact
              path="/info/squamous-cell-carcinoma"
              render={() => <InfoFrame data={data[4]} />}
            />

            {/* Disease Info */}
            {diseaseData.map((disease, index) => (
              <Route
                exact
                path={disease.route}
                render={() => <DiseaseInfoFrame data={disease} />}
                key={index}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
