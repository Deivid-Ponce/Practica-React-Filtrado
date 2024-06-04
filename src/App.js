import React, { useState } from 'react';
import FilteredList from './FilteredList';
import SearchBox from './SearchBox';
import style from './style.css'


function App() {
  const [items] = useState([
    { id: 1, name: 'Intensa-Mente'},
    { id: 2, name: 'Terrifier' },
    { id: 3, name: 'Godzilla Minus One' },
    { id: 4, name: 'Amigos imaginarios' },
    { id: 5, name: 'Atlas' },
    { id: 6, name: 'Pollitos en fuga' },
    { id: 7, name: 'Five Nights at Freddy' },
    { id: 8, name: 'Rapido y Furioso' },
    { id: 9, name: 'Gigante de Hierro' },
    { id: 10, name: 'El Ritual' },
    { id: 11, name: 'Hellraiser' },
    { id: 12, name: 'Evil Dead' },

  ]);
  const [searchText, setSearchText] = useState('');

  return (
    <div className='container'>
      <h1 className='title'>Practica React Filtrado</h1>
      <SearchBox setSearchText={setSearchText} />
      <FilteredList items={items} searchText={searchText} />
    </div>
  );
}

export default App;
