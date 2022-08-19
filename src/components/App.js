import React from "react";
import SearchBar from "./SearchBar"
import MovieList from "./MovieList"
import axios from "axios";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
class App extends React.Component {
    state = {
        movies: [

        ],
        searchQuery: ""
    }


    //AXIOS
    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data });
    }


    //AXIOS API
    deleteMovie = async (movie) => {
        const baseURL = 'http://localhost:3002/movies/' + movie.id;
        await axios.delete(baseURL);

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }));
    }

    addMovie = async (movie) => {
        await axios.post('http://localhost:3002/movies/', movie);
        this.setState(state => ({
            movies: state.movies.concat([movie])
        }));
    }


    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return (
                    movie.name.toLocaleLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
                );
            }
        ).reverse();

        return (
            <Router>
                <div className="container">

                    <Routes>

                        <Route path="/" exact element={
                            <React.Fragment>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <SearchBar searchMovieProp={this.searchMovie} />

                                    </div>

                                </div>
                                <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
                            </React.Fragment>
                        } />


                        <Route path="/add" element={
                            <AddMovie

                                onAddMovie={(movie) => {

                                    this.addMovie(movie);

                                }
                                }

                            />}
                        />

                        <Route path="/edit/:id" element={
                            <EditMovie
                               
                            
                            />}
                        />
                    </Routes>

                </div>
            </Router>
        )
    }
}

export default App;