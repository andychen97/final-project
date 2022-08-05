import React from 'react';
import parseRoute from './lib/parse-route';
import Home from './pages/home';
import jwtDecode from 'jwt-decode';
import SearchResults from './pages/search-results';
import LogoHeader from './components/header';
import PageContainer from './components/page-container';
import ClickedRestaurant from './pages/clicked-restaurant';
import Auth from './pages/auth';
import AppContext from './lib/app-context';
import Profile from './pages/profile';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthorizing: true,
      route: parseRoute(window.location.hash)
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? jwtDecode(token) : null;
    this.setState({ user, isAuthorizing: false });
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    this.setState({ user });
  }

  handleSignOut() {
    window.localStorage.removeItem('react-context-jwt');
    this.setState({ user: null });
  }

  renderPage() {
    const { path } = this.state.route;
    if (path === '') {
      return <Home />;
    }
    if (path === 'search-result') {
      const params = this.state.route.params;
      return <SearchResults keyword={params.get('keyword')} location={params.get('location')} />;
    }
    if (path === 'single-result') {
      const params = this.state.route.params;
      return <ClickedRestaurant clickedId={params.get('clickedId')} />;
    }
    if (path === 'sign-up' || path === 'sign-in') {
      return <Auth />;
    }
    if (path === 'profile') {
      return <Profile />;
    }
  }

  render() {
    if (this.state.isAuthorizing) return null;
    const { user, route } = this.state;
    const { handleSignIn, handleSignOut } = this;
    const contextValue = { user, route, handleSignIn, handleSignOut };
    return (
          <AppContext.Provider value={contextValue}>
              <div className="white-bg">
                <div className='margin-0-auto'>
                  <LogoHeader onSignOut={handleSignOut}/>
                </div>
              </div>
              <div className="grey-bg">
                <div className="margin-0-auto">
                  <PageContainer>
                    { this.renderPage() }
                  </PageContainer>
                </div>
              </div>
        </AppContext.Provider>
    );
  }
}
