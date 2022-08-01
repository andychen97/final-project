import React from 'react';
import ReactStars from 'react-rating-stars-component';
import SingleReview from '../components/single-review';
import Maps from '../../images/google-maps.png';

export default class ClickedRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedId: this.props.clickedId,
      isLoading: true,
      data: [],
      reviews: []
    };
  }

  componentDidMount() {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        clickedId: this.props.clickedId
      })
    };

    fetch('/api/search/:id', req)
      .then(res => res.json())
      .then(restaurantData => this.setState({
        data: restaurantData
      }))
      .catch(err => console.error('err:', err));

    fetch('/api/search/:id/review', req)
      .then(res => res.json())
      .then(reviews => this.setState({
        reviews,
        isLoading: false
      }))
      .catch(err => console.error('err:', err));
  }

  render() {
    if (this.state.isLoading) return null;
    const data = this.state.data;
    const reviews = this.state.reviews;
    return (
      <div>
        <div className="row">
          <div className="col-1">
            <h1 className='rest-name-results'>{data.name}</h1>
          </div>
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
            <p className='review-count inline'>{data.review_count} Reviews</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <img src={data.image_url} className='clicked-result-image' />
          </div>
          <div className="col-2">
            <img src={Maps} className='clicked-result-image' />
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <SingleReview reviews={reviews}/>
          </div>
        </div>
      </div>
    );
  }
}
