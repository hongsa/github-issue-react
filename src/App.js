import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import Header from './components/Header';
import Home from './containers/Home';
import About from './containers/About';
import NoMatch from './containers/NoMatch';


const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
