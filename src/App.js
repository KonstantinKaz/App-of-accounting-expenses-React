import Costs from "./components/UI/Costs";
import NewCost from "./components/NewCosts/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 2, 12),
    description: "Bridge",
    amount: 999.99,
  },

  // {
  //   id: "c2",
  //   date: new Date(2021, 8, 18),
  //   description: "Macbook",
  //   amount: 2000,
  // },

  // {
  //   id: "c3",
  //   date: new Date(2021, 12, 2),
  //   description: "jnuuuuuu",
  //   amount: 999.99,
  // },
];

function App() {
  const [costs, setConts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    // setConts((prevCosts) => {
    //   return [cost, ...prevCosts];
    // });
    setConts([cost, ...costs]);

  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
