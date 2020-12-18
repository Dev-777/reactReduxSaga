import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const getFunc = () => {
    axios({
      method: "get",
      url:
        "https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=TestName174417",
    }).then((res) => console.log(res, "get"));
  };

  const postFunc = () => {
    const config = {
      withCredentials: true,
      data: {
        name: "new test Name 55",
        age: 45,
      },
    };

    axios
      .post(
        "https://crudcrud.com/api/9ab57387487f4caa98989aff6d9b379d/test172317",
        config
      )
      .then((response) => console.log(response, "post"));
  };

  const putFunc = () => {
    const config = {
      withCredentials: true,
      data: {
        name: "change 1700000000",
        age: 19,
      },
    };

    axios
      .put(
        "https://crudcrud.com/api/9ab57387487f4caa98989aff6d9b379d/test172317/5fdcc153e445ab03e8f70e16",
        config
      )
      .then((response) => console.log("post"));
  };

  return (
    <>
      <button onClick={getFunc}>get</button>
      <button onClick={postFunc}>post</button>
      <button onClick={putFunc}>put</button>
    </>
  );
};

export default Test;
