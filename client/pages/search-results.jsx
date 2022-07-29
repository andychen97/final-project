import React from 'react';
import PriceFilter from '../components/price-filter';
import ResultBox from '../components/result-box';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        keyword: this.props.keyword,
        location: this.props.location
      })
    };

    fetch('/api/search', req)
      .then(res => res.json())
      .then(realData => this.setState({ data: realData.businesses }))
      .catch(err => console.error('err:', err));
  }

  render() {
    const results = this.state.data;
    return (
      <>
      <hr className='hr-line'/>
        <PriceFilter />
        <ResultBox results={results} />
      </>
    );
  }
}
