import React from 'react';
import logo from '../../images/chef-logo.png';
import AppContext from '../lib/app-context';

export default class LogoHeader extends React.Component {
  constructor(props) {
    super(props);

    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signUp() {
    window.location.hash = 'sign-up';
  }

  signOut() {
    window.location.hash = '';
    this.props.onSignOut();
  }

  render() {
    const { user } = this.context;

    const signUpButton = (
      <div className="col-3">
        <div className="row flex-end">
          <button className='sign-up' onClick={this.signUp}>Sign Up</button>
        </div>
      </div>
    );

    const signOutButton = (
      <div className="col-3">
        <div className="row flex-end">
          <button className='sign-up' onClick={this.signOut}>Sign Out</button>
        </div>
      </div>
    );

    const SignUpOutButton = !user ? signUpButton : signOutButton;
    return (
        <div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <div className='row align-center'>
                <img src={logo} alt='chef-logo' className='logo' />
              </div>
            </div>
          {SignUpOutButton}
          </div>
        </div>
    );
  }
}

LogoHeader.contextType = AppContext;
