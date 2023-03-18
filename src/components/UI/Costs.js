import React, { useState } from "react";
import "./Costs.css";
import CostCard from "../Costs/CostCard";
import CostsFilter from "../NewCosts/CostsFilter";
import CostsDiagram from "../Diagram/CostsDiagram";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <CostsDiagram costs={filteredCosts} />
      {filteredCosts.length === 0 && <p>В этом году расходов неть</p>}
      {filteredCosts.length > 0 &&
        filteredCosts.map((cost) => (
          <CostCard
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
    </div>
  );
}

export default Costs;
