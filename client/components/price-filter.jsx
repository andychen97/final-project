import React from 'react';

export default class PriceFilter extends React.Component {

  render() {
    return (
      <div>
        <button className='filter-prices'>$</button>
        <button className='filter-prices'>$$</button>
        <button className='filter-prices'>$$$</button>
        <button className='filter-prices'>$$$$</button>
        <button className='filter-prices'>$$$$$</button>
      </div>
    );
  }
}
