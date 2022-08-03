import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function MapComponent(props) {
  const initialMarkers = [];
  const results = props.results;
  for (let i = 0; i < 10; i++) {
    initialMarkers.push({
      position: {
        lat: results[i].coordinates.latitude,
        lng: results[i].coordinates.longitude
      }
    });
  }
  const [markers] = useState(initialMarkers);

  const center = {
    lat: results[1].coordinates.latitude,
    lng: results[1].coordinates.longitude
  };

  return (
    <LoadScript googleMapsApiKey=''>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '75vh' }}
        center={center}
        zoom={11}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
           />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
