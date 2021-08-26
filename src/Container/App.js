import React from 'react';
import { UserContextProvider } from '../Component/UserProvider';
import Login from './Login';
import Print from './Print';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserInfo from '../Component/UserInfo/Index';

function App() {
  return (
    <React.Fragment>
      <UserContextProvider>
        <UserInfo /> 
        <Router>
          <Switch>
            <Route path="/prints">
              <Print />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </React.Fragment>
  );
}

export default App;
