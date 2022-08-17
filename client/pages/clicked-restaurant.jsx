import React from 'react';
import ReactStars from 'react-rating-stars-component';
import SingleReview from '../components/single-review';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Favorites from '../components/save-to-favorites';
import AppContext from '../lib/app-context';

export default class ClickedRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      reviews: []
    };
  }

  componentDidMount() {
    Promise.all([
      fetch(`/api/search/${this.props.clickedId}`)
        .then(res => res.json()),
      fetch(`/api/search/${this.props.clickedId}/reviews`)
        .then(res => res.json())
    ]).then(results => {
      const [restaurant, reviews] = results;
      this.setState({
        isLoading: false,
        data: restaurant,
        reviews
      });
    });
  }

  render() {
    const { user } = this.context;
    const { data } = this.state;
    const values = { user, data };
    if (this.state.isLoading) return null;
    const reviews = this.state.reviews;
    const location = this.state.data.location;
    const coordinates = this.state.data.coordinates;
    return (
      <div className='grey-background'>
        <div className='row space-between'>
          <h1 className='clicked-restaurant-title'>{data.name}</h1>
          <Favorites values={values} />
        </div>
        <div className='row'>
          <div className='col-3-10'>
            <ReactStars
              count={5}
              value={data.rating}
              size={20}
              isHalf={true}
              edit={false}
              activeColor='#f43939'
            />
          </div>
          <div className='col2-3'>
            <p className='clicked-review-count inline'>{data.review_count} Reviews</p>
          </div>
        </div>
        <div className='row'>
          <ul className='categories margin-left-10'>
            {data.categories.map(({ title }) => {
              return (
                <li key={title}>{title}</li>
              );
            })
            }
          </ul>
        </div>
        <div className='row flex-wrap'>
          <div className='col-2'>
            <img src={data.image_url} className='clicked-result-image' />
          </div>
          <div className='col-2 maps-container'>
            <MapContainer
              center={[coordinates.latitude, coordinates.longitude]}
              zoom={15}
              scrollWheelZoom={true}
              style={{ width: '100%', height: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[coordinates.latitude, coordinates.longitude]} />
            </MapContainer>
          </div>
        </div>
        <hr className='clicked-result-hr'/>

        <div className='row flex-wrap'>
          <div className='col-66 order2 border-right'>
            <div className='row'>
              <h3 className='recom-reviews-title'>Ratings and reviews</h3>
            </div>
            <div className='row'>
              <div className='col-1'>
                <SingleReview reviews={reviews}/>
              </div>
            </div>
          </div>
          <div className='col-33 order1'>
            <div className="row flex-wrap space-around">
              <div className="hor">
                <i className='fab fa-regular fa-clock fa-lg inline margin-10 clock' />
                <h3 className='margin-10 inline'>Hours of Operation</h3>
                <table className='time-table'>
                  <tbody>
                    {data.hours[0].open.map(({ day, start, end }) => {
                      const days = {
                        0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'
                      };
                      return (
                        <tr key={day}>
                          <td className='which-day'>{days[day]}</td>
                          <td>{`${start[0]}${start[1]}:${start[2]}${start[3]} -`}</td>
                          <td>{`${end[0]}${end[1]}:${end[2]}${end[3]}`}</td>
                        </tr>
                      );
                    })
                    }
                  </tbody>
                </table>
              </div>
              <div className='location-table flex-wrap'>
                <div className='location-title'>
                  <i className='fas fa-regular fa-location-pin fa-lg location inline' />
                  <h3 className='margin-10 inline'>Location</h3>
                  <p>{location.address1}<br />
                  {location.city}, {location.state} {location.zip_code}<br />
                  {data.display_phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ClickedRestaurant.contextType = AppContext;
