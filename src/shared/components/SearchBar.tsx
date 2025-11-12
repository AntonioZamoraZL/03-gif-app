import { useState, useEffect, type KeyboardEvent } from 'react'

interface Props{
    placeHolder?: string;

    onQuery: (query: string) => void;
}

export const SearchBar = ({placeHolder = 'Buscar', onQuery}:Props) => {
  const [query, setQuery] = useState('');
    const handleSearch = () => {
    onQuery(query);
    setQuery('');
  }

  useEffect(() =>{
    const timeoutId = setTimeout(() =>{
      onQuery(query);
    },700);
    
    //onQuery(query);

    return() =>{
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

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
