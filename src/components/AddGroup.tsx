import * as React from "react";
import { IAddGroupProps } from "../data/models";

interface IState {
  value: string;
}

class AddGroup extends React.Component<IAddGroupProps, IState> {
  constructor(props: IAddGroupProps) {
    super(props);
    this.state = {
      value: ""
    };
  }

  private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value });
  };

  private handleSubmit = () => {
    const { nextGroupId, onAddGroup, onIncGroupId } = this.props;
    if (this.state.value) {
      onAddGroup({ id: nextGroupId, title: this.state.value });
      onIncGroupId();
      this.setState({ value: "" });
    }
  };

  private handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  };

  public render() {
    return (
      <div className="form-inline bg-light p-2 mx-auto row">
        <input
          type="text"
          className="form-control col-8"
          value={this.state.value}
          onKeyPress={this.handlePress}
          onChange={this.handleChange}
        />
        <div className="col-4 text-center">
          <button
            className="btn btn-sm btn-primary form-control"
            onClick={this.handleSubmit}
          >
            Добавить
          </button>
        </div>
      </div>
    );
  }
}

export default AddGroup;
