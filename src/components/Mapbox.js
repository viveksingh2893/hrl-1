import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap ,Marker} from "react-google-maps";
import { useEffect, useState } from "react";
import {FallOutlined,CalendarFilled} from '@ant-design/icons';

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
      >
        <Marker position={{lat:23.2,lng:81.08886}} icon={{url:"https://www.hdnicewallpapers.com/Walls/Big/Squirrel/Peanut_Eating_Squirrel_Beautiful_Image.jpg",
        scaledSize: new window.google.maps.Size(40,40)}}/>
        <Marker position={{lat:23.2,lng:70}} icon={{url:"https://www.hdnicewallpapers.com/Walls/Big/Squirrel/Peanut_Eating_Squirrel_Beautiful_Image.jpg",
        scaledSize: new window.google.maps.Size(40,40)}}/>
        <Marker position={{lat:20,lng:81.08886}} icon={{url:"https://www.hdnicewallpapers.com/Walls/Big/Squirrel/Peanut_Eating_Squirrel_Beautiful_Image.jpg",
        scaledSize: new window.google.maps.Size(40,40)}}/>
        <Marker position={{lat:12,lng:78}} icon={{url:"https://www.hdnicewallpapers.com/Walls/Big/Squirrel/Peanut_Eating_Squirrel_Beautiful_Image.jpg",
        scaledSize: new window.google.maps.Size(40,40)}}/>
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
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAOssA6l0DP4CJBqrDQ4Te1_EaJFkpbkhA`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Mapbox;
