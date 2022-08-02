import React from 'react';
import logo from '../../images/chef-logo.png';

export default class LogoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.hash = 'sign-up';
  }

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <div className='row align-center'>
                <img src={logo} alt='chef-logo' className='logo' />
              </div>
            </div>
            <div className="col-3">
              <div className="row flex-end">
              <button className='sign-up' onClick={this.handleClick}>Sign Up</button>
              </div>
            </div>
        </div>
        </div>
    );
  }
}
