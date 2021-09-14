import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./app/store/index";
function App() {
  // const state = useSelector((state) => state);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withDrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="App">
      <h1>Account: {account}</h1>
      <button onClick={() => depositMoney(100)}>+</button>-------
      <button onClick={() => withDrawMoney(100)}>-</button>
    </div>
  );
}

export default App;
