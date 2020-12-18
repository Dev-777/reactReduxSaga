import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const getFunc = () => {
    axios({
      method: "get",
      url:
        "https://crudcrud.com/api/9ab57387487f4caa98989aff6d9b379d/test172317",
    }).then((res) => console.log(res, "get"));
  };

  const postFunc = () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      data: {
        name: "t122",
        age: 19,
      },
    };

    axios
      .post(
        "https://crudcrud.com/api/9ab57387487f4caa98989aff6d9b379d/test172317",
        config
      )
      .then((response) => console.log("post"));
  };

  const putFunc = () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
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
