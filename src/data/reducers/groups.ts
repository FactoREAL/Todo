import { IAction, IGroup } from "../models";
import {groupActionType} from "../constants";

const initState = [
  { id: 0, title: "Работа" },
  { id: 1, title: "Личное" }
];

function groups(state: IGroup[] = initState, action: IAction<IGroup>) {
  switch (action.type) {
    case groupActionType.ADD_GROUP:
      return [
        ...state,
        { id: action.payload!.id, title: action.payload!.title }
      ];
    default:
      return state;
  }
}

export default groups;
