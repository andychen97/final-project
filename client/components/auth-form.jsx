import React from 'react';
import SignUp from './sign-up';
import SignIn from './sign-in';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Tester',
      password: 'Password',
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
    const bodyState = action === 'sign-up'
      ? this.state
      : {
          username: this.state.username,
          password: this.state.password
        };
    const reqs = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyState)
    };
    fetch(`/api/auth/${action}`, reqs)
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
    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;
    const alternateActionHref = action === 'sign-up'
      ? '#sign-in'
      : '#sign-up';
    const alternatActionText = action === 'sign-up'
      ? 'Sign in instead'
      : 'Register now';
    const submitButtonText = action === 'sign-up'
      ? 'Register'
      : 'Log In';
    const topTwoInputs = action === 'sign-up'
      ? <SignUp handleChange={handleChange} />
      : <SignIn handleChange={handleChange} state={this.state} />;

    return (
      <div className='margin-top-20'>
        <form onSubmit={handleSubmit}>
          {topTwoInputs}
          <div className='row space-between'>
            <small>
              <a href={alternateActionHref}>
                {alternatActionText}
              </a>
            </small>
            <button type='submit' className='register'>
              {submitButtonText}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
