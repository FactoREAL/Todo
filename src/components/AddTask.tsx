import * as React from "react";
import { useCallback, useState } from "react";

import { INewTask } from "../data/models";

type Props = {
  currentGroup: string;
  nextTaskId: number;
  addTask: (task: INewTask) => void;
  incTaskId: () => void;
};

const AddTask: React.FC<Props> = ({
  currentGroup,
  nextTaskId,
  addTask,
  incTaskId
}) => {
  const [task, setTask] = useState("");

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setTask(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (currentGroup && task) {
      addTask({ id: nextTaskId, group: currentGroup, title: task });
      incTaskId();
      setTask("");
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
        className="form-control col-10"
        value={task}
        onKeyPress={handlePress}
        onChange={handleChange}
      />
      <div className="col-2 text-center">
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

export default AddTask;
