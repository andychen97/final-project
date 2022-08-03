import React from 'react';
import logo from '../../images/chef-logo.png';
import AppContext from '../lib/app-context';

export default class LogoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    window.location.hash = '';
    this.props.onSignOut();
  }

  render() {
    const { user } = this.context;
    const signIn = user ? null : <a className='sign-in' href='#sign-in'>Sign In</a>;
    const signUpOut = user
      ? <button className='sign-up' onClick={this.signOut}>Sign Out</button>
      : <a className='sign-up' href='#sign-up'>Sign Up</a>;
    return (
      <div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3">
            <div className='row align-center'>
              <a href='#'>
                <img src={logo} alt='chef-logo' className='logo' />
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="row flex-end">
              {signIn}
              {signUpOut}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LogoHeader.contextType = AppContext;
