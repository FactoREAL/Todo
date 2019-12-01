import { groupActionType } from "../const/actionTypes";
import { IAction, IActiveGroup } from "../types";

function currentGroup(state: string = "", action: IAction<IActiveGroup>) {
  switch (action.type) {
    case groupActionType.SET_GROUP:
      return action.payload!.title;
    default:
      return state;
  }
}

export default currentGroup;
