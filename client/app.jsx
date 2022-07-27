import React from 'react';
import Home from './pages/home';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     keyword: this.props.keyword,
  //     location: this.props.location
  //   };
  // }

  // componentDidMount() {
  //   const term = encodeURI(this.state.keyword);
  //   const loc = encodeURI(this.state.location);
  //   fetch(`api/search?term=${term}&location=${loc}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.error('error', err));
  // }

  render() {
    return <Home />;
  }
}
