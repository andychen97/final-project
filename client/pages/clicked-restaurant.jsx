import React from 'react';

export default class ClickedRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedId: this.props.clickedId,
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
        clickedId: this.props.clickedId
      })
    };

    fetch('/api/search/:id', req)
      .then(res => res.json())
      .then(restaurantData => this.setState({ data: restaurantData }))
      .catch(err => console.error('err:', err));
  }

  render() {
    const data = this.state.data;
    // const open = data.hours[0].open[0].start;
    return (
      <div>
        <h3>name: {data.name}</h3>
        <img src={data.photos} />
        <h3>rating: {data.rating}</h3>
        <h3>review_count: {data.review_count}</h3>
        <h3>Sunday: {open}</h3>

      </div>
    );
  }
}
