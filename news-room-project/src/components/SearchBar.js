import React, { useState } from "react";
import icon from '../utils/icons/search2.svg'

const SearchBar = () => {
    return (
        <div className="col-md-3 searchbar-container">
            <form className="searchbar-form"> 
                <input className="searchbar-input"/>
                <button className="searchbar-button">                    
                    <img className="icon" src={icon}/>
                </button> 
            </form>
        </div>

    )
}

export default SearchBar;