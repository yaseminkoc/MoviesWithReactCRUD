import React from "react";
import { Link } from "react-router-dom";
const MovieList = (props) => {
    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ...`;
    }
    return (
        <div className="row">
            {props.movies.map((movie) => (
                <div className="col-lg-3" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-3" alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{truncateOverview(movie.overview, 100)}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger" onClick={(event) => props.deleteMovieProp(movie)}>Delete</button>
                                <Link type="button"
                                    to={`edit/${movie.id}`}
                                    className="btn btn-md btn-primary"
                                    style={{ float: 'left' }}>Edit
                                </Link>
                                <h2><span className="badge bg-info">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )

}

export default MovieList;