import React, { Component } from "react";
import Person from "./Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "parmesh",
      },
    ],
  };

  deleteHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  render() {
    return (
      <div className="App">
        {this.state.persons.map((person, index) => {
          return (
            <Person
              click={() => this.deleteHandler(index)}
              name={person.name}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
