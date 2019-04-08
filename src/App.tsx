import React, { Component } from 'react';

// Skeleton & Normalize CSS
import 'react-skeleton-css/styles/skeleton.2.0.4.css';
import 'react-skeleton-css/styles/normalize.3.0.2.css';
import './App.css';

import { subscribeToKafkaTopic } from './api';

import Person from './Components/Person';
import PeopleList from './Components/PeopleList';

type AppState = {
  messages: any;
};

export class App extends Component<{}, AppState> {
  constructor(props: Readonly<{}>) {
    super(props);

    subscribeToKafkaTopic((err, message) => {
      const messages = this.state.messages;
      messages.unshift(message);
      this.setState({
        messages
      });
    });
  }

  state: AppState = {
    messages: [
      {
        firstName: 'testy',
        lastName: 'tester',
        birthDate: '21/08/1994'
      }
    ]
  };

  render() {
    return (
      <div>
        {/* Header */}
        <div className="container ">
          <div className="row">
            <div className="twelve columns centertext">
              <h1>Kafka Visualization</h1>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns centertext">
              <h5>Last Person:</h5>
            </div>
          </div>
        </div>
        {/* Person Display */}
        <Person
          firstName={
            this.state.messages ? this.state.messages[0].firstName : 'N/A'
          }
          lastName={
            this.state.messages ? this.state.messages[0].lastName : 'N/A'
          }
          birthDate={
            this.state.messages ? this.state.messages[0].birthDate : 'N/A'
          }
        />
        {/* Previous People Display */}
        <div className="container ">
          <div className="row">
            <div className="twelve columns centertext">
              <h5>Previous People:</h5>
            </div>
          </div>
        </div>
        <PeopleList people={this.state.messages} />
      </div>
    );
  }
}

export default App;
