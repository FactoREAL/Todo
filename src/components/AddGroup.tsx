import * as React from "react";
import { useCallback, useState } from "react";

import { IGroup } from "../data/models";

type Props = {
  nextGroupId: number;
  onAddGroup: (group: IGroup) => void;
  onIncGroupId: () => void;
};

const AddGroup: React.FC<Props> = ({
  nextGroupId,
  onAddGroup,
  onIncGroupId
}) => {
  const [group, setGroup] = useState("");

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setGroup(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (group) {
      onAddGroup({ id: nextGroupId, title: group });
      onIncGroupId();
      setGroup("");
    }
  }, []);

  const handlePress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    },
    []
  );

  return (
    <div className="form-inline bg-light p-2 mx-auto row">
      <input
        type="text"
        className="form-control col-8"
        value={group}
        onKeyPress={handlePress}
        onChange={handleChange}
      />
      <div className="col-4 text-center">
        <button
          className="btn btn-sm btn-primary form-control"
          onClick={handleSubmit}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default AddGroup;
