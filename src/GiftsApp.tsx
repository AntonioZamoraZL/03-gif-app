import { useState } from 'react'
import { mockGifs } from './mock-data/gifs-mocks'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.actions'

export const GiftsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['']);
    const [gifsGiphy, setGifGiphy] = useState(mockGifs);
    const handleTermClicked = async (term:string) => {
        setGifGiphy(await getGifsByQuery(term));

    }
    const handleSearch = async ( query: string ) => {
        query = query.trim().toLowerCase();

        if (query.length == 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms.splice(0,6)])

        setGifGiphy( await getGifsByQuery(query) );
    }
  return (
    <>
        <CustomHeader 
            title = "Buscador de Gifs"
            description='Descubre y comparte el gif'
        ></CustomHeader>
        
        <SearchBar placeHolder='Busca lo que quieras' onQuery= {handleSearch}></SearchBar>

        <PreviousSearches previousSearch={previousTerms} onLabelClick={handleTermClicked}></PreviousSearches>

        <GifList gifs={gifsGiphy}/>
    </>
  )
}

