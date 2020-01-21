import * as React from "react";
import { IEditTaskProps } from "../data/models";

interface IState {
  taskId: number;
  value: string;
}

class EditTask extends React.Component<IEditTaskProps, IState> {
  constructor(props: IEditTaskProps) {
    super(props);
    this.state = {
      taskId: this.props.task.id,
      value: this.props.task.title
    };
  }

  private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      value: e.currentTarget.value
    });
  };

  private handleSave = () => {
    if (this.state.value) {
      this.props.editSave({ id: this.state.taskId, title: this.state.value });
    }
  };

  private handleCancel = () => {
    this.props.editCancel(this.state.taskId);
  };

  private handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.handleSave();
    }
  };

  public render() {
    return (
      <li key={this.props.task.id} className="list-group-item form-inline">
        <div className="form-group row">
          <input
            className="form-control col-8"
            value={this.state.value}
            onKeyPress={this.handlePress}
            onChange={this.handleChange}
          />
          <div className="col-4 text-center">
            <button
              className="btn btn-primary btn-sm form-control mr-2"
              onClick={this.handleSave}
            >
              Сохранить
            </button>
            <button
              className="btn btn-outline-secondary btn-sm form-control"
              onClick={this.handleCancel}
            >
              отмена
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default EditTask;
