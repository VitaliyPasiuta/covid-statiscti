import confirmedImg from "../img/Confirmed.png";
import deathsImg from "../img/Deaths.png";
import reacoveredImg from "../img/Recovered.png";
import "../css/PopUp.css";

export const PopUp = ({
  name,
  totalConfirmed,
  totalDeaths,
  totalRecovered,
  closePopUp,
}) => {
  //console.log(totalConfirmed);
  return (
    <div className="pop-up-wrapper">
      <div className="pop-up">
        <h1>{name}</h1>
        <p>
          <span>
            <img src={confirmedImg} alt="Confirmed" />
            <span>Total Confirmed</span>{" "}
          </span>

          <span>{totalConfirmed}</span>
        </p>
        <p>
          <span>
            <img src={deathsImg} alt="Deaths" />
            <span>Total Deaths</span>
          </span>

          <span>{totalDeaths}</span>
        </p>
        <p>
          <span>
            <img src={reacoveredImg} alt="Reacovered" />
            <span>Total Recovered</span>
          </span>

          <span>{totalRecovered}</span>
        </p>
        <input type="button" value="OK" onClick={closePopUp} />
      </div>
    </div>
  );
};
