import React, {Component} from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  /*render: comonetWillMount()
  ->render() -> componentDidMount()

Update: componentWillReceiveProps()
 -> shouldomponentUpdate() ->
 componentwillUpdate() ->render()*/

  state = {
  }

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie title={movie.title}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        rating={movie.rating}
        synopsis={movie.synopsis}/>
  })
  return movies
}

_getMovies = async() => {
  const movies = await this._callApi()
  this.setState({
    movies
  })
}

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?quality=3D?sort_by=download_count')
    .then(url => url.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))

  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
        <h2>fuck</h2>
    </div>

  );
  }
}

export default App;
