import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "mobx-react";

import Main from "./common/pages/Main";
import Card from "./common/pages/Card";
import stores from "./common/stores";

function App() {
  return (
    <Provider {...stores}>
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/card/:id" component={Card} />
      </Router>
    </Provider>
  );
}

export default App;
