import React from 'react';
// import Redirect from '../components/redirect';
import AuthForm from '../components/auth-form';
import AppContext from '../lib/app-context';

export default class Auth extends React.Component {
  render() {

    const { route } = this.context;

    // if (user) return <Redirect to="" />;

    // const welcomeMessage = 'Create an account to get started!';
    return (
    // <div className='row vh1'>
    //   <div className='col-1'>
    //     <div className='sign-in-up-form'>
    //       <h1>hello</h1>
    //     </div>
    //   </div>
    // </div>

      <div className='row align-center vertical-center vh100'>
        <div className= 'sign-in-up-form'>
          <div className="card p-3 ">
            <AuthForm
              key={route.path}
              action={route.path}
              />
              {/* onSignIn={handleSignIn} /> */}
          </div>
        </div>
      </div>
    );
  }
}

Auth.contextType = AppContext;
