import React from 'react';

function FilteredList({ items, searchText }) {
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className='list'>
            <h2>Lista de Peliculas</h2>
            <ol>
                {filteredItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ol>
        </div>
    );
}

export default FilteredList;