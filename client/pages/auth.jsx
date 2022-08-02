import React from 'react';
import Redirect from '../components/redirect';
import AuthForm from '../components/auth-form';
import AppContext from '../lib/app-context';

export default class Auth extends React.Component {
  render() {
    const { user, route } = this.context;
    if (user) return <Redirect to="" />;

    const welcomeMessage = route.path === 'sign-in'
      ? 'Sign in to continue!'
      : 'Create an account to get started!';
    const boxSize = route.path === 'sign-in'
      ? 'sign-in-form'
      : 'sign-up-form';

    return (
      <div className='row align-center vertical-center vh100'>
        <div className={boxSize}>
          <h3 className='welcome-title'>{welcomeMessage}</h3>
            <AuthForm
              key={route.path}
              action={route.path}
            />
            {/* onSignIn={handleSignIn} /> */}
        </div>
      </div>
    );
  }
}

Auth.contextType = AppContext;
