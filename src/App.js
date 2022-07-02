import { useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  console.log('render');

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));

  const filteredMonsters = monsters.filter(monster => {
    return monster.name.toLowerCase().includes(searchField);
  });

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">

      <h1 className='app-title'>Monsters Rolodex, {searchField}</h1>

      <SearchBox
        className='monsters-search-box'
        type="search"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />

      <CardList monsters={filteredMonsters} />

    </div>
  );
}

// class Apph extends Component {

//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(
//         () => {
//           return {
//             monsters: users
//           }
//         }
//       ));
//   }

//   onSearchChange = event => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => ({ searchField }));
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">

//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox
//           className='monsters-search-box'
//           type="search"
//           placeholder="search monsters"
//           onChangeHandler={onSearchChange}
//         />

//         <CardList monsters={filteredMonsters} />

//       </div>
//     );
//   }
// }

export default App;