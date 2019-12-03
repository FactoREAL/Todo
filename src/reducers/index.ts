import { combineReducers } from "redux";
import groups from "./groups";
import nextGroupId from "./nextGroupId";
import currentGroup from "./currentGroup";
import nextTaskId from "./nextTaskId";
import tasks from "./tasks";
import { IGroup } from "../types";

const allReducers = combineReducers({
  currentGroup,
  groups,
  tasks,
  nextGroupId,
  nextTaskId
});

export type GlobalState = {
  currentGroup: string;
  groups: IGroup[];
  tasks: any[];
  nextGroupId: number;
  nextTaskId: number;
};

export default allReducers;
