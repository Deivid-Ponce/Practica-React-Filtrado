import React from 'react';

function SearchBox({ setSearchText }) {
    const handleInputChange = event => {
        setSearchText(event.target.value);
    };

    return (
        <div className='busqueda'>
            <h2>Busqueda de Pelicula</h2>
            <input type="text" placeholder="Busqueda..." onChange={handleInputChange} />
        </div>
    );
}

export default SearchBox;