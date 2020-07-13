import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Teacher from './components/teacherCom/teacher';
import Landing from './components/landing/landing';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/sign-in' component={Login} />
          <Route path='/sign-up' component={Signup} />
          <Route path='/teacher' component={Teacher} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;