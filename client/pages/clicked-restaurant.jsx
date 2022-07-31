import React from 'react';
import ReactStars from 'react-rating-stars-component';

export default class ClickedRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedId: this.props.clickedId,
      isLoading: true,
      data: []
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
        data: restaurantData,
        isLoading: false
      }))
      .catch(err => console.error('err:', err));
  }

  render() {
    if (this.state.isLoading) return null;
    const data = this.state.data;
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
          <div className="col-1">
            <img src={data.image_url} className='clicked-result-image' />
            {/* <h1>{this.state.data.photos} </h1> */}
          </div>
        </div>
      </div>
    );
  }
}
