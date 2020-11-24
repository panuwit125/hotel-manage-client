import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

function GooglemapComponent({ pointX, pointY }) {
  function Map() {
    const [selectedPark, setSelectedPark] = useState(null);
    console.log(parseFloat(pointX));
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: parseFloat(pointX), lng: parseFloat(pointY) }}
      >
        <Marker
          position={{ lat: parseFloat(pointX), lng: parseFloat(pointY) }}
          onClick={() => {
            //setSelectedPark(1);
          }}
        />
        {selectedPark && (
          <InfoWindow
            position={{
              lat: parseFloat(pointX),
              lng: parseFloat(pointY),
            }}
            onCloseClick={() => setSelectedPark(null)}
          >
            <div>park detail</div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  console.log(pointX, pointY);
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBF_p39LHLtGqaN4oBtioAPt163-ALETRM`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default GooglemapComponent;
