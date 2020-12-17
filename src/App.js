import React from "react";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./Reducer";
import { Provider } from "react-redux";
import Connected from "./Connected";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

const App = () => {
  const store = createStore(reducer, applyMiddleware(logger, thunk));

  return (
    <>
      <Provider store={store}>
        <Connected />
      </Provider>
    </>
  );
};

export default App;
