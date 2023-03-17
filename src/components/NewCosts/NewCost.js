import "./NewCost.css";
import CostForm from "./CostForm";

function NewCost(props) {
  const savedCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);
  };

  return (
    <div className="new-cost">
      <CostForm onSavedCostData={savedCostDataHandler} />
    </div>
  );
}

export default NewCost;
