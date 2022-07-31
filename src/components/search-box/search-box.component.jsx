import "./search-box.styles.css"

const SearchBox = ({ className, placeholder, onChangeHndler }) => {
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHndler}
    />
  );
}

export default SearchBox;