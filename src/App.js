import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispath = useDispatch();
  return (
    <div className="App">
      <h1>Increment and Decrement counter</h1>
      <div className="container">
        <button onClick={() => dispath(incNumber())}>+</button>
        <h2 id="counting">{myState}</h2>
        <button onClick={() => dispath(decNumber())}>-</button>
      </div>
    </div>
  );
}

export default App;
