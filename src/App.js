import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box';
import CardList from './components/card-list/card-list';


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
        <h1 className='app-title'>Monster Rolodex</h1>

        <SearchBox 
        className='monster-search-box'
        onChangeHandler ={onSearchChange} 
        placeholder='Search Monsters'
        />
        <CardList monsters={filteredMonster} />
        
      </div>
    );
  }
}

export default App;
