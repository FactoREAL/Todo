import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import GroupListContainer from "./containers/GroupListContainer";
import TaskListContainer from "./containers/TaskListContainer";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(allReducers);

store.subscribe(() => console.log(store.getState()));

function App() {
  return (
    <div className="container mt-2">
      <div className="row">
        <GroupListContainer />
        <TaskListContainer />
      </div>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);