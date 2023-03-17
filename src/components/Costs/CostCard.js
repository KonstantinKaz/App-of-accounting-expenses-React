import "./CostCard.css";
import CostDate from "./CostDate";
import React, { useState } from "react";

function CostCard(props) {
  const [description, setDescription] = useState(props.description);

  const changeDescriptionHandler = () => {
    setDescription("Шишл мышл встал и вышел");
  };

  return (
    <div className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
      <button onClick={changeDescriptionHandler}>Change</button>
    </div>
  );
}

export default CostCard;
