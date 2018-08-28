import * as React from 'react';
import { IAddGroupProps } from "../types";

interface IState {
	value: string
}

class AddGroup extends React.Component<IAddGroupProps, IState> {
	constructor(props: IAddGroupProps) {
		super(props);
		this.state = {
			value: ''
		};
	}

	private handlerChange = (e: React.FormEvent<HTMLInputElement>) => {
		this.setState({value: e.currentTarget.value});
	};

	private handlerSubmit = () => {
		const {nextGroupId, onAddGroup, onIncGroupId} = this.props;
		if (this.state.value) {
            onAddGroup({id: nextGroupId, title: this.state.value});
            onIncGroupId();
			this.setState({value: ''});
		}
	};

	private handlerPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') { this.handlerSubmit(); }
	};

	public render() {
		return(
			<div className="form-inline bg-light p-2 mx-auto row">
				<input type="text" className="form-control col-8" value={this.state.value} onKeyPress={this.handlerPress} onChange={this.handlerChange}/>
				<div className="col-4 text-center">
					<button className="btn btn-sm btn-primary form-control" onClick={this.handlerSubmit}>Добавить</button>
				</div>
			</div>
		);
	}
}

export default AddGroup;