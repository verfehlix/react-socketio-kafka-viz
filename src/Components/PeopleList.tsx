import React, { Component } from 'react';

export default class PeopleList extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const everyoneButFirstPersonMax15 = this.props.people.slice(1, 16);

    return (
      <ul className="centertext peopleList slide-fade">
        {everyoneButFirstPersonMax15.map((person: any) => (
          <li className="show" key={person.firstName + ' ' + person.lastName}>
            {person.firstName} {person.lastName} ({person.birthDate})
          </li>
        ))}
      </ul>
    );
  }
}
