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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


injectTapEventPlugin();

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Switch>
        <MuiThemeProvider>
          <Header>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
          </Header>
        </MuiThemeProvider>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
