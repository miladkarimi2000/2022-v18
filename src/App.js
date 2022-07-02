import { useState } from 'react';

import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');

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

    </div>
  );
}

export default App;