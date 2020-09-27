import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React from 'react';

const MapContainer = (props: any) => {
  const style = {
    width: "100%",
    height: "100%",
  };
  const containerStyle = {
    width: "100%",
    height: "50%",
  };
  return (
    <div className="mapWidth">
      <Map
        google={props.google}
        style={style}
        containerStyle={containerStyle}
        initialCenter={{
          lat: props.lat,
          lng: props.lon,
        }}
      >
        <Marker onClick={() => null} />
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_KEY ? process.env.GOOGLE_KEY : "",
})(MapContainer);
