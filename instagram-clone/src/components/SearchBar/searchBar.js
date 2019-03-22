import React from 'react'

const SearchBar = props => {
    return (
        <div>
            <input type='text' placeholder='Search Here!' onKeyDown={props.searchPosts} />
        </div>
    )
};

export default SearchBar;

