import React from 'react';

export default class PriceFilter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {

  // }

  render() {
    const handleClick = this.handleClick;
    return (
      <div>
        <button className='filter-prices' onClick={handleClick}>$</button>
        <button className='filter-prices' onClick={handleClick}>$$</button>
        <button className='filter-prices' onClick={handleClick}>$$$</button>
        <button className='filter-prices' onClick={handleClick}>$$$$</button>
      </div>
    );
  }
}
