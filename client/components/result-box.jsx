import React from 'react';
import ReactStars from 'react-rating-stars-component';

export default class ResultBox extends React.Component {
  constructor(props) {
    super(props);
    this.renderSingleLi = this.renderSingleLi.bind(this);
  }

  renderSingleLi(props) {
    const results = props.results;
    return results.map(info => {
      return (
        <li key={info.id} onClick={event => {
          event.preventDefault();
          const clickedId = { clickedId: info.id };
          const searchParams = new URLSearchParams(clickedId);
          window.location.hash = 'single-result?' + searchParams;
        }}>
          <div className='result-box white-bg'>
            <div className='row'>
              <div className='col-3'>
                <img src={info.image_url} className='result-img' />
              </div>
              <div className="col2-3">
                <div className='row'>
                  <h2 className='rest-name-results'>{info.name}</h2>
                </div>
                <div className='row'>
                  <div className='col2 stars'>
                    <ReactStars
                      count={5}
                      value={info.rating}
                      isHalf={true}
                      edit={false}
                      activeColor='#f43939'
                      classNames='stars'
                    />
                  </div>
                  <div className='col2'>
                    <p className='review-count inline'>{info.review_count} Reviews</p>
                  </div>
                </div>
                <div className='row'>
                  <ul className='search-categories'>
                    { info.categories.map(({ title }) => {
                      return (
                        <li key={title}>{title}</li>
                      );
                    })
                    }
                  </ul>
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
      <ul>{this.renderSingleLi(this.props)}</ul>
    );
  }
}
