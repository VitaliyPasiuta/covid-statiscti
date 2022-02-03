import "../css/ListItem.css";

export const ListItem = ({ number, country, totalConfirmed, choiseItem }) => {
  return (
    <li
      className="list-item"
      onClick={() => {
        choiseItem(country);
      }}
    >
      <span>
        <span>{number + 1}</span>
        <span>{country}</span>
      </span>

      <span>{totalConfirmed}</span>
    </li>
  );
};
