import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ResourceDetail from '../resources/ResourceDetail';
import ResourceList from '../resources/ResourceList';
// import AddResource from '../resources/AddResource';
import CrudController from '../resources/Controller';
import Header from '../Header';
import EditResource from '../resources/EditResource';

export default function App() {
  return (
    <Router testId={'app-test'}>
      <Header />
      <Switch>
        <Route exact path="/edit/:id">
          <EditResource />
        </Route>
        <Route exact path="/add">
          <CrudController />
        </Route>
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
