import React, { useState } from "react";
import axios from 'axios';
import Moviecard from "./Moviecard";

const Search = () => {

    const [text, settext] = useState()
    const [movie, setmovie] = useState([])


    const changetext = (event) => {
        settext(event.target.value);
    }

    const getmovie = (e) => {
        e.preventDefault();

        axios.get(`https://www.omdbapi.com/?s=${text}&apikey=43033444`)
            .then((response) => {
                setmovie(response.data.Search);
            })
    }

    return (
        <>
            <form className="" onSubmit={getmovie}>
                <input type="text" placeholder="searchmovie" value={text} onChange={changetext} />

                <button className="submit" type="submit" > Search</button>
            </form>
            <main className="name">
                {
                    movie && movie.map((value, index) =>
                        <Moviecard key={index} movies={value} />)

                }
            </main>
        </>
    );
};
export default Search;
