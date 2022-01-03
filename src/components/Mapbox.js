import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Mapbox = () => {
  const Map = () => {
    return (
      <GoogleMap defaultZoom={5} defaultCenter={{ lat: 22, lng: 79.08886 }} />
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div style={{ width: "45vw", height: "80vh" }}>
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
