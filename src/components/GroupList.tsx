import * as React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddGroupContainer from "../containers/AddGroupContainer";
import { GlobalState } from "../reducers";
import { setGroup as setGroupAction } from "../actions/group";
import Group from "./Group";

const GroupList: React.FC = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state: GlobalState) => state.groups);
  const currentGroup = useSelector((state: GlobalState) => state.currentGroup);
  const setGroup = useCallback(
    (title: string) => dispatch(setGroupAction(title)),
    [dispatch]
  );

  return (
    <div className="col-4">
      <h5 className="text-center">Группы</h5>
      <ul className="list-group mb-3">
        {groups.map(group => (
          <Group
            key={group.id}
            group={group}
            currentGroup={currentGroup}
            setGroup={setGroup}
          />
        ))}
      </ul>
      <AddGroupContainer />
    </div>
  );
};

export default GroupList;
