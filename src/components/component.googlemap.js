import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
    >
      <Marker
        position={{ lat: 45.421532, lng: -75.697189 }}
        onClick={() => {
          setSelectedPark(1);
        }}
      />
      {selectedPark && (
        <InfoWindow
          position={{
            lat: 45.421532,
            lng: -75.697189,
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

function GooglemapComponent() {
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
