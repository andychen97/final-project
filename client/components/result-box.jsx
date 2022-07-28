import React from 'react';
import placeholder from '../../images/placeholder-image.png';

export default class ResultBox extends React.Component {
  render() {
    return (
      <li>
        <div className='result-box'>
          <div className='row'>
            <div className='col-5'>
              <img src={placeholder} className='result-img' />
            </div>
            <div className="col4-5">
              <h3 className='rest-name-results'>Sup Noodle Bar - Irvine</h3>
              <div className='stars'>
                <i className='fa-solid fa-star' />
                <i className='fa-solid fa-star' />
                <i className='fa-solid fa-star' />
                <i className='fa-solid fa-star' />
                <i className='fa-solid fa-star' />
                <i className='fa-solid fa-star-half-stroke' />
                <i className='fa-regular fa-star' />
                <i className='fa-regular fa-star' />
                <i className='fa-regular fa-star' />
                <i className='fa-regular fa-star' />
                <h6 className='review-count'>139 Reviews</h6>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
