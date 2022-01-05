import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { useEffect, useState } from "react";

const Mapbox = () => {
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);

  function zoomval() {
    if (viewPortWidth > 450) {
      return 5;
    } else {
      return 4;
    }
  }

  let zval = zoomval();

  const Map = () => {
    return (
      <GoogleMap
        defaultZoom={zval}
        defaultCenter={{ lat: 23.2, lng: 81.08886 }}
      />
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div
      style={{
        width: `${viewPortWidth > 850 ? "45vw" : "80vw"}`,
        height: `${viewPortWidth > 450 ? "75vh" : "50vh"}`,
      }}
    >
      {/* <div style={{ width: "45vw", height: "75vh" }}> */}
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDOEHa04N_FH70nmh_12NYmzZ8eDzcwbiQ&callback=initMap`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Mapbox;
