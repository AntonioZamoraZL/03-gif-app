import React, { useEffect, useState, type KeyboardEvent } from 'react'

interface Props{
    placeHolder?: string;

    onQuery: (query: string) => void;
}

export const SearchBar = ({placeHolder = 'Buscar', onQuery}:Props) => {
  const [query, setQuery] = useState('');

  useEffect 

    const handleSearch = () => {
    onQuery(query);
    setQuery('');
  }
  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter'){
      handleSearch();
    }
  }

  return (
          <div className="search-container">
            <input
            type="text" 
            name="" 
            id="" 
            placeholder={placeHolder} 
            value={query} 
            onChange={(event) => setQuery(event.target.value) }
            onKeyDown={handleEnter}
            />
            <button
            onClick={handleSearch}
            >Buscar</button>
        </div>
  )
}
