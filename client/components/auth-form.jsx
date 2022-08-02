import React from 'react';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { action } = this.props;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch(`/api/auth/${action}`, req)
      .then(res => res.json())
      .then(result => {
        if (action === 'sign-up') {
          window.location.hash = 'sign-in';
        } else if (result.user && result.token) {
          this.props.onSignIn(result);
        }
      });
  }

  render() {
    const { action } = this.props;
    const { handleChange, handleSubmit } = this;
    const alternateActionHref = action === 'sign-up'
      ? '#sign-in'
      : '#sign-up';
    const alternatActionText = action === 'sign-up'
      ? 'Sign in instead'
      : 'Register now';
    const submitButtonText = action === 'sign-up'
      ? 'Register'
      : 'Log In';
    const topTwoInputs =
        (<div>
          <div>
            <label htmlFor="firstName" className="form-labels">First Name</label>
            <div>
            <input
              required
              autoFocus
              id="firstName"
              type="text"
              name="firstName"
              onChange={handleChange}
              className="form-control" />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="form-labels">Last Name</label>
            <div>
            <input
              required
              autoFocus
              id="lastName"
              type="text"
              name="lastName"
              onChange={handleChange}
              className="form-control" />
            </div>
          </div>
        </div>);

    return (
      <div>
        <h3></h3>
        <form onSubmit={handleSubmit}>
          {action === 'sign-up' ? topTwoInputs : null}
          <div>
            <div>
              <label htmlFor="username" className="form-labels">Username</label>
              <div>
                <input
                  required
                  autoFocus
                  id="username"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  className="form-control" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="form-labels">Password</label>
              <div>
                <input
                  required
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="form-control bg-light" />
              </div>
            </div>
          </div>
          <div className="row space-between">
            <small>
              <a className="sign-in-instead" href={alternateActionHref}>
                {alternatActionText}
              </a>
            </small>
            <button type="submit" className="register">
              {submitButtonText}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
