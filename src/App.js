import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import AddTutorial from './components/AddTutorial'
import TutorialList from './components/TutorialList'
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Vikky
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React Firestore CRUD</h2>
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialList} />
            <Route exact path="/add" component={AddTutorial} />
          </Switch>
        </div>
    </div>

  );
}

export default App;
