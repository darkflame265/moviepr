import React, {Component} from 'react';
import './App.css';
import Movie from './Movie.js';

const moviesTitle = ["matrix", "iron man", "avengers:infinity war", "star wars"]
const movieImages = []

class App extends Component {
  /*render: comonetWillMount()
  ->render() -> componentDidMount()

Update: componentWillReceiveProps()
 -> shouldomponentUpdate() ->
 componentwillUpdate() ->render()*/

  state = {
    //state값을 변경할떈 직접적으로 변경하지
    //않고 setSate를 이용하여 변경
    greeting: 'Hello',
    movies: [
      {
        title: "Matrix",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
      }, {
        title: "Iron Man",
        poster: "https://is1-ssl.mzstatic.com/image/thumb/Video128/v4/89/74/cf/8974cfa0-5e27-1c5e-390a-e97e5d12a51d/contsched.rdzrzprk.lsr/268x0w.jpg"
      }, {
        title: "Avengers:Infinity War",
        poster: "https://images-na.ssl-images-amazon.com/images/I/81oTRumvcRL._SL1500_.jpg"
      }, {
        title: "star wars",
        poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies, { //이전에 있는 movies 데이터는 그대로 두기
            title: "fucking boys",
            poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"

          }
        ]
      })
    }, 2000) //2초후 함수 내용 실행
  }

  render() {
    return (<div className="App">
      {
        this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })
      }
    </div>);
  }
}

export default App;
