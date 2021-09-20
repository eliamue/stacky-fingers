import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ResourceDetail from '../resources/ResourceDetail';
import ResourceList from '../resources/ResourceList';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id">
          <ResourceDetail />
        </Route>
        <Route exact path="/">
          <ResourceList />
        </Route>
      </Switch>
    </Router>
  );
}
