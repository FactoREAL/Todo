import { IAction } from "../models";
import {groupActionType} from "../constants";

function nextGroupId(state: number = 2, action: IAction<null>) {
  switch (action.type) {
    case groupActionType.INC_GROUP_ID:
      return state + 1;
    default:
      return state;
  }
}

export default nextGroupId;
