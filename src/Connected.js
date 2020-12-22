import React from "react";
import { useDispatch } from "react-redux";
import { loadData } from "./actions";
import StateHOC from "./HOC/StateHOC";

const Connected = ({ state }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(loadData());
  };

  return (
    <>
      <button onClick={() => console.log(state.data)}>Show state</button>
      <button onClick={onClick}>Click me</button>
    </>
  );
};

export default StateHOC(Connected);
