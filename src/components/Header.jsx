import logo from "../img/header.png";
import "../css/Header.css";

export const Header = ({ searchChange }) => {
  return (
    <header>
      <img src={logo} alt="logo" />

      <div>
        <input
          className="search"
          type="search"
          placeholder="Search..."
          onChange={(event) => {
            searchChange(event.target.value);
          }}
        />
      </div>
    </header>
  );
};
