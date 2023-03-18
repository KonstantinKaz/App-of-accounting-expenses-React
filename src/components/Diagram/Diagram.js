import "./Diagram.css";
import DiagramBar from "./DiagramBar";

function Diagram(props) {
  const dataSetsValues = props.dataSets.map((dataSet) => dataSet.value);

  const maxMonthCost = Math.max(...dataSetsValues);

  return (
    <div className="diagram">
      {props.dataSets.map((props) => (
        <DiagramBar
          key={props.label}
          value={props.value}
          maxValue={maxMonthCost}
          label={props.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
