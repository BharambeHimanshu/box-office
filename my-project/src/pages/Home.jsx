import React, { useState }from "react";
import MainPageLayout from "../Components/MainPageLayout";
import { apiGet } from "../misc/config";

export default function Home() {
    const [input , setInput] = useState('');
    const [results, setResults] = useState(null);
    const [searchOption , setSearchOption] = useState('shows')
    const isShowSearch = searchOption === 'shows' ; 

    const onSearch =() => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result);
        })
    }

    const onInputChange =(ev) => {
        setInput(ev.target.value)
    }

    const onKeyDown = (ev) => {
        if(ev.keyCode ===13){
            onSearch()
        }
    }

    const OnRadioChange = (ev) => {
        setSearchOption (ev.target.value)
    }

    console.log(searchOption)

    const renderResults = () => {
        if(results && results.length === 0){
            return <div>No results</div>
        }

        if(results && results.length > 0){
            return results[0].show ? results.map(item => (
                <div key={item.show.id}>{item.show.name}</div>
            )) : results.map(item => (
                <div key={item.person.id}>{item.person.name}</div>
            ))
        }
            return null
        }


    return(
        <>
        <MainPageLayout>
            <input type="text" placeholder="Search for Something" onChange={onInputChange}  onKeyDown={onKeyDown} value={input}/>
            <div>
                <label htmlFor="show search">Shows<input id="show search" type="radio" value="shows" checked={isShowSearch} onChange={OnRadioChange}/></label>
                <label htmlFor="actor search">Actors<input id="actor search" type="radio" value="people" checked={!isShowSearch} onChange={OnRadioChange}/></label>
            </div>
            <button type="button" onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayout>
        </>
    )
}