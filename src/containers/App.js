import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import './App.scss';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import Content from '../components/Common/Content';
import Home from '../components/Home';

class App extends Component {
  render() {
    const routes = [{
      key: 'home',
      path: '/',
      exact: true,
      component: Home,
    }];
    return (
      <Router>
        <div className="app">
          <Header />
          <Button color="primary">Danger</Button>
          <Content>
            {routes.map(route => (
              <Route {...route} />
            ))}
          </Content>

          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
