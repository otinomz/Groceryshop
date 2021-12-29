import React from 'react'

function SearchItem({search, setSearch}) {
    return (
        <form
            className="searchForm"
            onSubmit={(e) => e.preventDefault()}
        >
            <label htmlFor="addItem">Search</label>
            
            <input
                autoFocus
                id="search"
                type="text"
                role='searchbox'
                placeholder='Search Item'
                value={search}
                onChange={(e) => setSearch(e.target.value)}

            />

            {/* <button
                type="submit"
                aria-label="Add Item"
            >
                <FaPlus/>
            </button> */}
        </form>
    )
}

export default SearchItem
