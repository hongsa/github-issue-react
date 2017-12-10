import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { Header } from "./components";
import { Issues, IssueDetail, NoMatch } from "./containers";

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Issues} />
            <Route path="/issue/:number" component={IssueDetail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
