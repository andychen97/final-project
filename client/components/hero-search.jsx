import React from 'react';
import hero from '../../images/hero.png';

export default class HeroSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      location: ''
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(event) {
    this.setState({ keyword: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
  }

  render() {
    return (
      <div className='relative'>
        <img src={hero} alt='hero-image' className='hero-img' />
        <div className='hero-search absolute white-bg'>
          <h1 className='text-center hero-title'>Find Your Cuisine!</h1>
          <form onSubmit={this.handleSubmit} className='text-center'>
            <input className='search-form'
                    type='text'
                    placeholder='Search...'
                    value={this.state.keyword}
                    onChange={this.handleSearchChange}
                    required />
            <input className='location-form'
                    type='text'
                    placeholder='Location...'
                    value={this.state.location}
                    onChange={this.handleLocationChange}
                    required />
            <button type='submit' className='form-submit'>
              <i className="fas fa-regular fa-lg fa-magnifying-glass" />
            </button>
            <hr className='search-line'/>
          </form>
        </div>
      </div>
    );
  }
}
