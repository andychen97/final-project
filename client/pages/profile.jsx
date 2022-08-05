import React from 'react';
import AppContext from '../lib/app-context';

export default class Profile extends React.Component {
  render() {
    const { user } = this.context;
    return (
      <button>{user.firstName}</button>
    );
  }
}

Profile.contextType = AppContext;
