import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "mobx-react";

import Main from "./common/pages/Main";
import Coctail from "./common/pages/Coctail";
import stores from "./common/stores";

function App() {
  return (
    <Provider {...stores}>
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/card/:id" component={Coctail} />
      </Router>
    </Provider>
  );
}

export default App;
