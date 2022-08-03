import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

export default class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.Markers = this.Markers.bind(this);
  }

  Markers(props) {
    const results = props.results;
    return (
      results.map(({ coordinates }, index) => {
        return (
          <Marker key={index} position={[coordinates.latitude, coordinates.longitude]}/>
        );
      })
    );
  }

  render() {
    const results = this.props.results;
    const lat = results[0].coordinates.latitude;
    const lng = results[0].coordinates.longitude;

    return (
      <MapContainer
        center={[lat, lng]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '70vh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.Markers(this.props)}
      </MapContainer>
    );
  }
}
