import React, { useState } from "react";
import MapGL, {
  NavigationControl,
  Marker,
  Popup,
  GeolocateControl,
} from "react-map-gl";

import { data } from "./data (1)";

const FindDermatologist = () => {
  const accessToken =
    "pk.eyJ1Ijoia2lyYS1wcm9qZWN0cyIsImEiOiJja2ZydW5pNzIwMHk0Mnd0ODQ2djdsM3BwIn0.-0fF4iKEUdDVIGsCVQz_fg";

  const [defaults, setDefaults] = useState({
    viewport: {
      latitude: 18.480811,
      longitude: 73.872425,
      zoom: 14,
      bearing: 0,
      pitch: 0,
      width: "100vw",
      height: "88vh",
    },
  });
  const navStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "10px",
  };

  const [popupInfo, setPopupInfo] = useState(null);
  const [indexOfPop, setIndexOfPop] = useState(null);

  const renderPopup = (index) => {
    return popupInfo === null ? null : (
      <Popup
        tipSize={5}
        anchor="bottom-right"
        longitude={data[indexOfPop].long}
        latitude={data[indexOfPop].lat}
        onMouseLeave={() => setPopupInfo(null)}
        closeOnClick={false}
        onClose={() => {
          setPopupInfo(null);
        }}
      >
        <div className="toot-tip">
          <h5>{data[indexOfPop].name}</h5>
          <a href={`tel:${data[indexOfPop].phone}`}>
            <i className="fas fa-phone"></i>
            {data[indexOfPop].phone}
          </a>
          <a
            href={data[indexOfPop].embed}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-location-arrow"></i>
            Find on Google Map
          </a>
        </div>
      </Popup>
    );
  };
  return (
    <div
      id="find-derma"
      style={{
        position: "absolute",
        overflow: "hidden",
        padding: 0,
        top: "12vh",
        left: 0,
      }}
    >
      <div className="my-map">
        <MapGL
          {...defaults.viewport}
          onViewportChange={(viewport) => setDefaults({ viewport })}
          mapStyle="mapbox://styles/mapbox/dark-v10?optimize=true"
          mapboxApiAccessToken={accessToken}
        >
          <div className="nav" style={navStyle}>
            <GeolocateControl
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
              className="my-1"
            />
            <NavigationControl
              onViewportChange={(viewport) => setDefaults({ viewport })}
            />
            {data.map((marker, index) => (
              <div key={index}>
                <Marker longitude={marker.long} latitude={marker.lat}>
                  <i
                    className="fas fa-map-marker-alt font-5 text-primary"
                    onMouseEnter={() => {
                      setPopupInfo(true);
                      setIndexOfPop(index);
                    }}
                    // onMouseLeave={() => setPopupInfo(null)}
                  />
                </Marker>
                {renderPopup(index)}
              </div>
            ))}
          </div>
        </MapGL>
      </div>
    </div>
  );
};

export default FindDermatologist;
