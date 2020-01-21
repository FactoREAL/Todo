import * as React from "react";
import { ITaskProps } from "../data/models";

class Task extends React.Component<ITaskProps> {
  private handleDelete = () => {
    this.props.deleteTask(this.props.task.id);
  };

  private handleEdit = () => {
    this.props.editTask(this.props.task.id);
  };

  private handleToggle = () => {
    this.props.toggleTask(this.props.task.id);
  };

  public render() {
    const { task } = this.props;
    const done = task.done ? "fa fa-check-circle" : "fa fa-circle-thin";
    const doneCss = task.done
      ? "btn btn-sm btn-outline-success mr-2"
      : "btn btn-sm btn-outline-secondary mr-2";
    return (
      <li key={task.id} className="list-group-item">
        <button className={doneCss} onClick={this.handleToggle}>
          <i className={done} />
        </button>
        {task.title}
        <button
          className="btn btn-outline-danger btn-sm float-right mx-1"
          onClick={this.handleDelete}
        >
          <i className="fa fa-trash" />
        </button>
        <button
          className="btn btn-outline-info btn-sm float-right mx-1"
          onClick={this.handleEdit}
        >
          <i className="fa fa-pencil" />
        </button>
      </li>
    );
  }
}

export default Task;
