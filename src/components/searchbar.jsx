function SearchBar({ query, setQuery }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="w-full p-3 border rounded-lg"
      />
    </div>
  );
}

export default SearchBar;