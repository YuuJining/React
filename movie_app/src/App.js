import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  };

  componentDidMount() {
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
  return (
    <section class="container">
      {isLoading ? (<div class="loader">
        <span class="loader_text">Loading...</span>
      </div>
      ) : (
      <div class="movies">
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            />
        ))}
      </div>
      )}
    </section>
  )
  }
}

export default App;
//React 앱이 실행되면 가장 먼저 호출되는 함수는 componentDidMount()

/*
정리해야할 것들!
1. React Life Cycle 함수들 정리
2. ES6 문법
*/