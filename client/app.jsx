import React from 'react';
import Home from './pages/home';
import SearchResults from './pages/search-results';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Home />
        <SearchResults />
      </>
    );
  }
}
