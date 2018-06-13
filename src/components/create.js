import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './create.css';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        databaseName: '',
        databaseUser: '',
        databasePassword: ''
      }
    }
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    let form = this.state.form;
    form[name] = value;

    this.setState({ form: form });
  }
  render() {
    return (
      <div className="container">
        <header className="introduction">
          <div className="jumbotron">
            <h1 className="display-4">Database</h1>
            <p>Create a new PostgreSQL database</p>
          </div>
        </header>
        <div className="form container">
          <div className="form-group">
            <label htmlFor="db_name">Database Name:</label>
            <input id="db_name" name="databaseName" type="text" className="form-control" value={this.state.databaseName}
              onChange={this.handleInput.bind(this)} />
          </div>
          <div className="form-row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="db_user">Database User:</label>
                <input id="db_user" name="databaseUser" type="text" className="form-control" value={this.state.databaseUser}
                  onChange={this.handleInput.bind(this)} />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="db_pass">Database Password:</label>
                <input id="db_pass" name="databasePassword" type="password" className="form-control" value={this.state.databasePassword}
                  onChange={this.handleInput.bind(this)} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <NavLink to="/">
                <div className="my-3 d-flex justify-content-center">
                  <button className="form-btn cancel">Cancel</button>
                </div>
              </NavLink>
            </div>
            <div className="col-6">
              <div className="my-3 d-flex justify-content-center">
                <button className="form-btn create">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Create;
