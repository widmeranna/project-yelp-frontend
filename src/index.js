import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantDetailPage from './components/RestaurantDetailPage';


injectTapEventPlugin();

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Switch>
        <MuiThemeProvider>
          <Header>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/contact" component={ Contact }/>
            <Route exact path="/restaurants/:id" component={ RestaurantDetailPage }/>
          </Header>
        </MuiThemeProvider>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
