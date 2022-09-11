import React from "react";


function Searchitem(){
    return (<div class="search-bar" >
        <input type="text" className="searchitem" placeholder="Search for anything" />
        <button className="search_icon" type="submit"><img className="searchicon" src="images/search-line.svg" alt="search-icon"/></button>
    </div>);

}

export default Searchitem;