import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box';
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
      ));
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value.toLowerCase()})
  }
  

  render() {
      const {searchField, monsters} = this.state
      const {onSearchChange} = this;

      const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
       });
    
    return (
      <div className="App">
        <h1>Monster List</h1>

        <SearchBox 
        className='search-box'
        onChangeHandler ={onSearchChange} 
        placeholder='Search Monsters'
        />
        <Card monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
