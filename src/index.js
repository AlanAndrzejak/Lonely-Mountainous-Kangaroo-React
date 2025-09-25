import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <BrowserRouter basename="/basquencheese">
      <Switch>
        {/* Home page */}
        <Route exact path="/" component={Home} />

        {/* catch-all for anything not matched */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('app'))
