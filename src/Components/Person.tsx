import React, { Component } from 'react';

import './Person.css';

export default class Person extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns personContainer">
            <div className="card card-2">
              <strong>Firstname:</strong>
              <p>{this.props.firstName}</p>
              <strong>Lastname:</strong>
              <p>{this.props.lastName}</p>
              <strong>Birthdate:</strong>
              <p>{this.props.birthDate}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
