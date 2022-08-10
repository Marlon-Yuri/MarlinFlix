import axios from "axios";
import styled from "styled-components";
import React, { Component } from "react";
 

const MoviesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=524b5482c573759992765668e997e0de&language=pt-BR&page=1"
});
export default class Movies extends Component {
  state = {
    movies: [],
    filterItem: []
  };
  componentDidMount() {
    this.getMovies();
  }
  getMovies = async () => {
    const response = await MoviesApi.get();
    const allmovies = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      movies: allmovies,
      filterItem: allmovies
    });
    console.log(allmovies);
  };

  
  handleChange = (event) => {
    const { movies } = this.state;
    if (event.target.value === "") {
      this.setState({
        filterItem: movies
      });
      return;
    }
    const filterItemConvert = movies.filter((item) => {
      if (
        item.original_title
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      ) {
        return true
      }
      //return false;
    });
    this.setState({
      filterItem: filterItemConvert
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Procure seu filme"
          onChange={this.handleChange}
        />
        <div>
          <h1>Top Movies</h1>
        </div>

        <div>
          {this.state.filterItem.map((item, id) => (
            <div key={id}>
              <h1>{item.title}</h1>
              <img src={item.poster_path} alt={item.title} />
              <p>{item.overview.substring(0, 40)}...</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
