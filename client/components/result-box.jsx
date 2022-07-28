import React from 'react';
import placeholder from '../../images/pho.png';
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
            <div className='col-3'>
              <img src={placeholder} className='result-img' />
            </div>
            <div className="col2-3">
              <div className='row'>
                <h2 className='rest-name-results'>Sup Noodle Bar - Irvine</h2>
              </div>
              <div className='row'>
                <div className='col-3-10'>
                  <ReactStars
                    count={5}
                    value={this.state.rating}
                    size={20}
                    isHalf={true}
                    edit={false}
                    activeColor='#f43939'
                  />
                </div>
                <div className='col2-3'>
                  <p className='review-count inline'>139 Reviews</p>
                </div>
              </div>
              <div className='row'>
                <ul className='search-categories'>
                  <li>Pho</li>
                  <li>Nooldes</li>
                  <li>Vietnamese</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
