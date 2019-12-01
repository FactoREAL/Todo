import { taskActionType } from "../const/actionTypes";
import { IAction } from "../types";

function nextTaskId(state: number = 3, action: IAction<null>) {
  switch (action.type) {
    case taskActionType.INC_TASK_ID:
      return state + 1;
    default:
      return state;
  }
}

export default nextTaskId;
