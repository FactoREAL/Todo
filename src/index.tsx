import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import GroupList from "./components/GroupList";
import TaskListContainer from "./containers/TaskListContainer";
import allReducers from "./data/reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const store = createStore(allReducers);

store.subscribe(() => console.log(store.getState()));

const App: React.FC = () => (
  <div className="container mt-2">
    <div className="row">
      <GroupList />
      <TaskListContainer />
    </div>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
