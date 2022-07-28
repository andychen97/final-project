import React from 'react';
import hero from '../../images/hero.png';

export default class HeroSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      location: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/search', req)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        window.location.hash = 'search-result';
      })
      .catch(err => console.error('err:', err));

  }

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <div className='relative'>
        <img src={hero} alt='hero-image' className='hero-img' />
        <div className='hero-search absolute white-bg'>
          <h1 className='text-center hero-title'>Find Your Cuisine!</h1>
          <form onSubmit={handleSubmit} className='text-center'>
            <input className='search-form'
                    type='text'
                    name='keyword'
                    placeholder='Search...'
                    onChange={handleChange}
                    required />
            <input className='location-form'
                    type='text'
                    name='location'
                    placeholder='Location...'
                    onChange={handleChange}
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
