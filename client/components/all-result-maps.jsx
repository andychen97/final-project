import React from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import ReactStars from 'react-rating-stars-component';

export default class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.Markers = this.Markers.bind(this);
  }

  Markers(props) {
    const results = props.results;
    return (
      results.map((info, index) => {
        return (
          <Marker key={index} position={[info.coordinates.latitude, info.coordinates.longitude]}>
            <Popup
              minWidth={200}
              maxWidth={250}
              closeButton={false}>
              <div className='row'>
                <div className="col-3">
                  <img src={info.image_url} className='popup-image' />
                </div>
                <div className="col2-3">
                  <h3 className='popup-text'>{info.name}</h3>
                    <ReactStars
                      count={5}
                      value={info.rating}
                      size={15}
                      isHalf={true}
                      edit={false}
                      activeColor='#f43939'
                    />
                    <h4 className='pop-up-review-count'>{info.review_count} Reviews</h4>
                  </div>
                </div>
            </Popup>
          </Marker>
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
