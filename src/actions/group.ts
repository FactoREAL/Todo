import { groupActionType } from "../const/actionTypes";
import { IAction, IActiveGroup, IGroup } from "../types";

export function addGroup(group: IGroup): IAction<IGroup> {
  return {
    payload: {
      id: group.id,
      title: group.title
    },
    type: groupActionType.ADD_GROUP
  };
}

export function incGroupId(): IAction<null> {
  return {
    type: groupActionType.INC_GROUP_ID
  };
}

export function setGroup(title: string): IAction<IActiveGroup> {
  return {
    payload: {
      title
    },
    type: groupActionType.SET_GROUP
  };
}
