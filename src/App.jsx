import React from 'react';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Moviecard from './Moviecard';

const App = () => {

  const [movie, setmovie] = useState();


const getmovies = async () =>{
  try {
    const info =await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
    


    // const info =(await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")).data;
    // console.log(info.results);


    // console.log(info.data);
    setmovie(info.data);
   
  }
  catch (err) {
    console.log(err);
  }
}
useEffect(()=>{
getmovies();
},[])


  return (<>
    <div className='App'>
    <header className="header">
      <h1 className="header_heading">
       🎥 Entertainment Hub 🎬  </h1>
    </header>
   
    <main className='main'>
    {
      movie && movie.length>0 && movie.map(movieset => <Moviecard key={movieset.id} movies={movieset}/>)
    }
    </main>
    </div>
  </>);
};

export default App;



//  // const axios = require("axios");
//  const getmovie = ()=>{
//   const options = {
//     method: 'GET',
//     url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
//     params: {q: 'game'},
//     headers: {
//       'X-RapidAPI-Key': 'c50f586c2cmsha6802ac171aac33p1a0225jsnb7cfee5b1ce9',
//       'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options)
//   .then(function (response) {
//     console.log(response.q);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
// }
