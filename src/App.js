import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {

  constructor() {
    console.log('constructor App');
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentWillMount() { console.log('componentWillMount App'); }

  componentDidMount() {
    console.log('componentDidMount App');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {
          return {
            monsters: users
          }
        }
      ));
  }

  componentWillReceiveProps() { console.log('componentWillReceiveProps App'); }
  componentWillUpdate() { console.log('componentWillUpdate App'); }
  componentDidUpdate() { console.log('componentDidUpdate App'); }

  onSearchChange = event => {
    console.log('onSearchChange');
    const searchField = event.target.value.toLowerCase();
    this.setState(() => ({ searchField }));
  }

  render() {
    console.log('render App');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">

        <input
          className='search-box'
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />

        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
