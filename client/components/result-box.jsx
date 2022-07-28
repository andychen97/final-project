import React from 'react';
import placeholder from '../../images/placeholder-image.png';
import ReactStars from 'react-rating-stars-component';

export default class ResultBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 4.5,
      data: {
        businesses: [{
          image_url: 'some link',
          name: 'some name',
          rating: 4.5,
          review_count: 139
        }]
      }
    };
  }

  render() {

    return (
      <li>
        <div className='result-box'>
          <div className='row'>
            <div className='col-5'>
              <img src={placeholder} className='result-img' />
            </div>
            <div className="col4-5">
              <div className='row'>
                <h3 className='rest-name-results'>Sup Noodle Bar - Irvine</h3>
              </div>
              <div className='row'>
                <div className='col-4'>
                  <ReactStars
                    count={5}
                    value={this.state.rating}
                    size={20}
                    isHalf={true}
                    edit={false}
                    activeColor='#f43939'
                  />
                </div>
                <div className='col-4 something'>
                  <p className='review-count inline'>139 Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
