import { IAction, IActiveGroup } from "../models";
import {groupActionType} from "../constants";

function currentGroup(state: string = "", action: IAction<IActiveGroup>) {
  switch (action.type) {
    case groupActionType.SET_GROUP:
      return action.payload!.title;
    default:
      return state;
  }
}

export default currentGroup;
