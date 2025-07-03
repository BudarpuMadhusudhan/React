import React from 'react';

function Search(props) {
    return (
        <div>
            <form className="d-flex" role="search" onSubmit={e => e.preventDefault()}>
                <input 
                    onChange={e => props.onChange(e.target.value)}
                    className='form-control me-2'
                    type="search"
                    placeholder=' Player Search'
                    aria-label="Search"
                />
                <button className="btn btn-outline-black" type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;
