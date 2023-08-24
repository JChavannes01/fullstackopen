const SearchBar = ({ handleChange, value }) => (
  <div>
    find countries <input type="text" onChange={handleChange} value={value} />
  </div>
);

export default SearchBar;
