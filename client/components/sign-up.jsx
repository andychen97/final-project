import React from 'react';

export default class SignUp extends React.Component {

  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <div>
          <label htmlFor='firstName' className='form-labels'>First Name</label>
          <div>
            <input required autoFocus
              id='firstName'
              type='text'
              name='firstName'
              onChange={handleChange}
              className='form-control' />
          </div>
        </div>
        <div>
          <label htmlFor='lastName' className='form-labels'>Last Name</label>
          <div>
            <input required autoFocus
              id='lastName'
              type='text'
              name='lastName'
              onChange={handleChange}
              className='form-control' />
          </div>
        </div>
        <div>
          <label htmlFor='username' className='form-labels'>Username</label>
          <div>
            <input required autoFocus
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
