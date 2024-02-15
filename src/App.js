import React, { Component } from 'react';
import './App.css';
import Card from './components/card-list/card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users },
        () => {
          console.log(this.state);
        }
      ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState({ searchField });
  };

  render() {
    const {searchField, monsters} = this.state
    const {onSearchChange} = this;

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1>Monster List</h1>
        <input
          className='search-box'
          type='search'
          placeholder='Search Monsters'
          onChange={onSearchChange}
        />
      
        {filteredMonster.map((monster, index) => {
          const id = `monster_${index}`;
          return <h1 key={id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
