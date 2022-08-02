import React from 'react';
import HeroSearch from '../components/hero-search';
import Redirect from '../components/redirect';
import AppContext from '../lib/app-context';

export default class Home extends React.Component {
  render() {

    if (!this.context.user) return <Redirect to="sign-in" />;

    return (
    <>
      <HeroSearch />
    </>
    );
  }
}

Home.contextType = AppContext;
