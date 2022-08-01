import React from 'react';
import ReactStars from 'react-rating-stars-component';

export default class SingleReview extends React.Component {
  constructor(props) {
    super(props);
    this.renderSingleReview = this.renderSingleReview.bind(this);
  }

  renderSingleReview(props) {
    const reviews = this.props.reviews.reviews;
    return reviews.map(review => {
      return (
        <li key={review.id}>
          <div className='result-box white-bg'>
            <div className='row'>
              <div className='col-3'>
                <img src={review.user.image_url} className='user-img' />
              </div>
              <div className="col2-3">
                <div className='row space-between'>
                  <h2 className='rest-name-results'>{review.user.name}</h2>
                  <h6 className='margin-10'>Reviewed on: {review.time_created}</h6>
                </div>
                <div className='row'>
                  <div className='col-3-10'>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={20}
                      isHalf={true}
                      edit={false}
                      activeColor='#f43939'
                    />
                  </div>
                </div>
                <div className='row'>
                  <p className='margin-10'>{review.text}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul>{this.renderSingleReview(this.props)}</ul>
    );
  }
}
