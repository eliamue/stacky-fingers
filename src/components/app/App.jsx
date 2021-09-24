import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ResourceDetail from '../resources/ResourceDetail';
import ResourceList from '../resources/ResourceList';
import AddResource from '../resources/AddResource';

export default function App() {
  return (
    <Router testId={'app-test'}>
      <Switch>
        <Route exact path="/:id">
          <ResourceDetail />
        </Route>
        <Route exact path="/add">
          <AddResource />
        </Route>
        <Route exact path="/">
          <ResourceList />
        </Route>
        <div>Hello World</div>
      </Switch>
    </Router>
  );
}
