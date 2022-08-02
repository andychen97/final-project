import React from 'react';
import logo from '../../images/chef-logo.png';
import AppContext from '../lib/app-context';

export default class LogoHeader extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user: false
    // };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.hash = 'sign-up';
  }

  render() {
    const { user } = this.context;

    const signUpButton = (
      <div className="col-3">
        <div className="row flex-end">
          <button className='sign-up' onClick={this.handleClick}>Sign Up</button>
        </div>
      </div>
    );

    const showSignUpButton = !user ? signUpButton : null;
    return (
        <div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <div className='row align-center'>
                <img src={logo} alt='chef-logo' className='logo' />
              </div>
            </div>
            {showSignUpButton}
          </div>
        </div>
    );
  }
}

LogoHeader.contextType = AppContext;
