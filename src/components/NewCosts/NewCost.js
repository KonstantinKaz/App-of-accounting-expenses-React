import "./NewCost.css";
import CostForm from "./CostForm";
import React, { useState } from "react";

function NewCost(props) {
  const [isFoemVisible, setIsFormVisible] = useState(false);

  const savedCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostDataHendler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFoemVisible && (
        <button onClick={inputCostDataHendler}>Добавить новый расход</button>
      )}
      {isFoemVisible && (
        <CostForm
          onSavedCostData={savedCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
}

export default NewCost;
