import React from "react";
import { Link } from "react-router-dom";
class SearchBar extends React.Component {
   
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return  (
            <form onSubmit={this.handleFormSubmit}>
                <div className="row mb-5 mt-5">
                    <div className="col-10">
                        <input 

                            onChange={this.props.searchMovieProp} 
                            type="text" className="form-control" 
                            placeholder="Seach a movie" 
                        />
                    </div>
                    <div className="col-2 float-left">
                        <Link type="button" 
                        to = "/add"
                                className="btn btn-md btn-danger"
                                style={{float:'left'}}>Add Movie
                        </Link>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;