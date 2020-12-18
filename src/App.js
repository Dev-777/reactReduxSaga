import React from "react";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./Reducer";
import { Provider } from "react-redux";
import Connected from "./Connected";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { watchLoadData } from "./sagas";
import Test from "./Test";

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

  sagaMiddleware.run(watchLoadData);

  return (
    <>
      <Provider store={store}>
        {/*<Connected />*/}
        <Test />
      </Provider>
    </>
  );
};

export default App;
