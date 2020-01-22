import * as React from "react";

import AddTaskContainer from "../containers/AddTaskContainer";
import Task from "./Task";
import EditTask from "./EditTask";
import { IEditTask, ITask } from "../data/models";

type Props = {
  tasks: ITask[];
  currentGroup: string;
  toggleTask: (id: number) => void;
  editTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editSave: (task: IEditTask) => void;
  editCancel: (id: number) => void;
};

const TaskList: React.FC<Props> = ({
  tasks,
  currentGroup,
  toggleTask,
  editTask,
  deleteTask,
  editSave,
  editCancel
}) => {
  const currentTasks = tasks.filter(task => task.group === currentGroup);

  return (
    <div className="col-8">
      <h5 className="text-center">Задачи</h5>
      <ul className="list-group list-group-flush mb-3">
        {currentTasks.map(task =>
          task.edit ? (
            <EditTask
              key={task.id}
              task={task}
              editSave={editSave}
              editCancel={editCancel}
            />
          ) : (
            <Task
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          )
        )}
      </ul>
      {currentGroup && <AddTaskContainer />}
    </div>
  );
};

export default TaskList;
