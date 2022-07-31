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
      .then(allData => this.setState({ data: allData }))
      .catch(err => console.error('err:', err));
  }

  render() {
    return (
      <h1>helloooo</h1>
    );
  }
}
