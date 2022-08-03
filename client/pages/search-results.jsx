import React from 'react';
import PriceFilter from '../components/price-filter';
import ResultBox from '../components/result-box';
import MapComponent from '../components/all-result-maps';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(`/api/search?keyword=${this.props.keyword}&location=${this.props.location}`)
      .then(res => res.json())
      .then(realData => this.setState({
        data: realData.businesses,
        isLoading: false
      }))
      .catch(err => console.error('err:', err));
  }

  render() {
    if (this.state.isLoading) return null;
    const results = this.state.data;
    return (
      <>
      <hr className='hr-line'/>
        <div className="row">
          <div className="col2-3">
            <PriceFilter />
            <ResultBox results={results} />
          </div>
          <div className="col-3 margin-top50">
            <MapComponent results={results}/>
          </div>
        </div>
      </>
    );
  }
}
