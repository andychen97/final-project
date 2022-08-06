import React from 'react';

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      save: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const user = this.props.values.user;
    const data = this.props.values.data;
    fetch('/api/user/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: data.id,
        user: user.userId
      })
    })
      .then(res => res.json())
      .then(result => this.setState(prevState => ({ save: !prevState.save })))
      .catch(err => { console.error('error:', err); });
  }

  render() {
    const buttonText = this.state.save
      ? 'Save to Favorites'
      : 'Remove from Favorites';
    return (
      <button className='save-to-favorites' onClick={this.handleSubmit}>{buttonText}</button>
    );
  }
}
