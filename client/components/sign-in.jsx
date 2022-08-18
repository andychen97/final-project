import React from 'react';

export default class SignUp extends React.Component {

  render() {
    const { handleChange } = this.props;
    const { username, password } = this.props.state;
    return (
      <div>
        <div>
          <label htmlFor='username' className='form-labels'>Username</label>
          <div>
            <input required autoFocus
              value={username}
              id='username'
              type='text'
              name='username'
              onChange={handleChange}
              className='form-control' />
          </div>
        </div>
        <div>
          <label htmlFor='password' className='form-labels'>Password</label>
          <div>
            <input required
              value={password}
              id='password'
              type='password'
              name='password'
              onChange={handleChange}
              className='form-control' />
          </div>
        </div>
      </div>);
  }
}
