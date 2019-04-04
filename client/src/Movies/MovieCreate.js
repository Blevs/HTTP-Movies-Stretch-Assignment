import React from 'react';
import axios from 'axios';

const MovieCreate = ({history}) => {
  const addMovie = event => {
    event.preventDefault();
    const movie = {};
    event.target.querySelectorAll('input').forEach(e => movie[e.name] = e.value);
    movie.stars = movie.stars.split(",").map(s => s.trim());
    movie.metascore = parseInt(movie.metascore, 10);
    console.log("this");
    axios.post('http://localhost:5000/api/movies', movie)
      .then(_ => history.push('/'))
      .catch(error => console.log(error));
  };
  return (
    <div className="movie-create">
      <h1>Add Movie</h1>
      <form onSubmit={addMovie}>
        <input type="text" name="title" placeholder="title"/>
        <input type="text" name="director" placeholder="director"/>
        <input type="number" name="metascore" placeholder="metascore"/>
        <input type="text" name="stars" placeholder="stars (comma separated)"/>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieCreate;
