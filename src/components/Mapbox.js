import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import { useEffect, useState } from "react";
import { FallOutlined, CalendarFilled } from "@ant-design/icons";

const Mapbox = ({ data }) => {
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    {
      data.map((item, index) => {
        console.log(typeof item.latitude, typeof parseFloat(item.latitude));
      });
    }
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
    console.log(data, "data");
    return (
      <GoogleMap
        defaultZoom={zval}
        defaultCenter={{ lat: 23.2, lng: 81.08886 }}
      >
        {data.map((item, index) => {
          const lat = parseFloat(item.latitude);
          const lng = parseFloat(item.longitude);
          return (
            <Marker
              position={{ lat: lat, lng: lng }}
              icon={{
                url: item.image,
                scaledSize: new window.google.maps.Size(40, 40),
              }}
            />
          );
        })}
      </GoogleMap>
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
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDOEHa04N_FH70nmh_12NYmzZ8eDzcwbiQ`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Mapbox;
