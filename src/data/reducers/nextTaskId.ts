import { IAction } from "../models";
import {taskActionType} from "../constants";

function nextTaskId(state: number = 3, action: IAction<null>) {
  switch (action.type) {
    case taskActionType.INC_TASK_ID:
      return state + 1;
    default:
      return state;
  }
}

export default nextTaskId;
