import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";
import { HiSearch } from "react-icons/hi";

const SearchBar = ({ handleChange, placeholder, searchTerm }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={searchTerm}
      />
      <span className={styles.icon}>
        <HiSearch />
      </span>
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
