import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
class EditMovie extends React.Component {
    state = {
        name: "",
        rating: "",
        overview: "",
        imageURL: ""
    }

    handleFormSubmit = (event) => {
        const { name, rating, overview, imageURL } = this.state;
        const updatedMovie = { name, rating, overview, imageURL };
        const id = window.location.pathname.replace("/edit/", "");
        this.props.onEditMovie(updatedMovie, id);

    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    async componentDidMount() {
        const id = window.location.pathname.replace("/edit/", "")
        const response = await axios.get(`http://localhost:3002/movies/${id}`);
        const movie = response.data;
        this.setState({ name: movie.name, rating: movie.rating, overview: movie.overview, imageURL: movie.imageURL });
    }
    render() {
        return (

            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Edit The Form To Update A Movie.." disabled />
                    <div className="row mt-2">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name" value={this.state.name}
                                onChange={this.onInputChange} />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating" value={this.state.rating}
                                onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="form-row mt-2">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL" value={this.state.imageURL}
                                onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="form-row mt-2">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" rows="5" value={this.state.overview}
                                onChange={this.onInputChange}></textarea>
                        </div>
                    </div>
                    <div className="form-row mt-5">
                        <div className="form-group col-md-12">

                            <Link type="button"
                                to="/" onClick={this.handleFormSubmit}
                                className="btn btn-md btn-danger w-100"
                            >Update Movie
                            </Link>

                        </div>
                    </div>
                </form>
            </div>
        );

    }
}

export default EditMovie;
