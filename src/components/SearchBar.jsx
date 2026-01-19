function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <section className="search-bar">
      <h2>Search Projects</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title, description, or technology..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          aria-label="Search projects"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="clear-search"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      <p className="search-hint">Type to filter projects in real-time</p>
    </section>
  );
}

export default SearchBar;