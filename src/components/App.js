import Header from './Header';
import Footer from './Footer';
import Body from './clock/Body';
import React, { Component } from 'react';
import '../styles/reset.css';
import '../styles/foundation/foundation.min.css';
import '../styles/font-awesome/css/font-awesome.min.css';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
