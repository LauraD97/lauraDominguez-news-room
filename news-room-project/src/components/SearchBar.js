import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import icon from '../utils/icons/search.svg'

const SearchBar = (props) => {
    const [word, setWord] = useState("");

    const handleSubmit = () => {
        props.history.push(`/categories/search/${word}`);
    }

    return (
        <div className="col-md-3 searchbar-container">
            <form className="searchbar-form" onSubmit={() => handleSubmit()}> 
                <input className="searchbar-input"
                       placeholder="Search"
                       value={word}
                       type="text"
                       onChange={(e) => setWord(e.target.value)} 
                       required
                />
                <button className="searchbar-button">                    
                    <img className="icon" src={icon} alt="search"/>
                </button> 
            </form>
        </div>
    )
}

export default withRouter(SearchBar);