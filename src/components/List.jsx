import { ListItem } from "./ListItem";
import '../css/List.css'

export const List = ({ countriesObj, choiseItem }) => {
  //console.log(countriesObj);
  return (
    <ul className="list">
      <li className="list-head">
        <span>
          <span>№</span>
          <span>Country</span>
        </span>

        <span>Total Confirmed</span>
      </li>
      {countriesObj.map((el, inx) => {
        return (
          <ListItem
            key={el.ID}
            number={inx}
            country={el.Country}
            totalConfirmed={el.TotalConfirmed}
            choiseItem={choiseItem}
          />
        );
      })}
    </ul>
  );
};
