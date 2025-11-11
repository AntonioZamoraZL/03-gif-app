import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs-mocks'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'

export const GiftsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['The Last Of US'])
    const handleTermClicked = (term:string) => {
        console.log({term})

    }
    const handleSearch = ( query: string ) => {
        console.log({query})
    }
  return (
    <>
        <CustomHeader 
            title = "Buscador de Gifs"
            description='Descubre y comparte el gif'
        ></CustomHeader>
        
        <SearchBar placeHolder='Busca lo que quieras' onQuery= {handleSearch}></SearchBar>

        <PreviousSearches previousSearch={previousTerms} onLabelClick={handleTermClicked}></PreviousSearches>

        <GifList gifs={mockGifs}/>
    </>
  )
}

