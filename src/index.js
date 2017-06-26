import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import Header from './containers/Header';
import About from './routes/About';
import Contact from './routes/Contact';

import Search from './routes/Search';
import Home from './routes/Home';
import store from './store';
import SignIn from './routes/SignIn';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider>
    <Router>
      <Switch>
        <Header>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/contact" component={ Contact }/>
          <Route exact path="/restaurants/:id" component={ RestaurantDetailPage }/>
          <Route exact path="/search" component={ Search } />
          <Route exact path="/users/sign_in" component={ SignIn } />
        </Header>
      </Switch>
    </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
