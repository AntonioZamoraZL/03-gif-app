import { type FC } from 'react';

interface Props{
    previousSearch:string[];

    onLabelClick: (term: string) => void
}


export const PreviousSearches: FC<Props> = ({previousSearch, onLabelClick}) => {
return (
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className=' previous-searches-list'>
                {
                    previousSearch.map(term => (
                        <li key={term}
                            onClick={ () => {
                                onLabelClick(term);
                            }}
                        >{term}</li>
                    ))
                }
            </ul>
        </div>
  )
}
