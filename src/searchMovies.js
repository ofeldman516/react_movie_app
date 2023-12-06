import React from "react";

export default function SearchMovies(){

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        const query = "Jurassic Park";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=f81086d542477a3a2a0369173c5aba3c&language=en-US&query=${query}&page=1&include_adult=false`;

        const res = await fetch(url);
        const data  = await res.json();
        console.log(data);
    }

    return (
        <form  className="form" onSubmit={SearchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}
