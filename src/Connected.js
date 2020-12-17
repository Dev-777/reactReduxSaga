import React from "react";
import { useDispatch } from "react-redux";
import { putData } from "./actions";

const Connected = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(putData({}));
  };

  return (
    <>
      <button onClick={onClick}>Click me</button>
    </>
  );
};

export default Connected;
