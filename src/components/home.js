import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <header className="introduction">
          <div className="jumbotron">
            <h1 className="display-4">React PostgreSQL</h1>
            <p>A demo app for quering a PostgreSQL DBMS</p>
          </div>
        </header>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-6 d-flex justify-content-center">
              <NavLink to="/create">
                <button className="nav-btn">Create database</button>
              </NavLink>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <NavLink to="/manage">
                <button className="nav-btn">Manage database</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
