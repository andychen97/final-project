import React from 'react';
import AppContext from '../lib/app-context';

export default class Profile extends React.Component {
  render() {
    const { user } = this.context;
    const firstName = user.firstName[0].toUpperCase() + user.firstName.slice(1, user.firstName.length);
    const lastName = user.lastName[0].toUpperCase() + user.lastName.slice(1, user.lastName.length);
    return (
      <div className="row">
        <div className="card">
          <div className='picture-header'>
            <div className="picture-frame">
              <img className='profile-card-img'src="https://randomuser.me/api/portraits/men/3.jpg" alt="profile-picture" />
            </div>
            <h1 className='profile-card-name'>{firstName} {lastName}</h1>
            <p className='profile-review-count'>0 Reviews</p>
          </div>
          <div>
            <h3 className='profile-recent-reviews'>Recent Reviews</h3>
            <hr className='grey-line'/>
          </div>
        </div>
      </div>
    );
  }
}

Profile.contextType = AppContext;
