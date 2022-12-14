import React from "react";
import serialize from "form-serialize";
import { useNavigate } from "react-router-dom";

const AddMovie = (props) => {
    const navigate = useNavigate();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newMovie = serialize(event.target, { hash: true });
        props.onAddMovie(newMovie);
        navigate("/");
    }


    return (

        <div className="container">
            <form className="mt-5" onSubmit={handleFormSubmit}>
                <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                <div className="row mt-2">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input type="text"
                            className="form-control"
                            name="name" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input
                            type="text"
                            className="form-control"
                            name="rating" />
                    </div>
                </div>
                <div className="form-row mt-2">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="imageURL" />
                    </div>
                </div>
                <div className="form-row mt-2">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea
                            className="form-control"
                            name="overview" rows="5"></textarea>
                    </div>
                </div>
                <div className="form-row mt-5">
                    <div className="form-group col-md-12">
                        <input type="submit" className="btn btn-danger w-100" value="Add Movie" />
                    </div>
                </div>
            </form>
        </div>
    );

}

export default AddMovie;