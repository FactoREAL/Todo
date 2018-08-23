import React, { Component } from 'react';

class Group extends Component {
	handlerClick = () => {
		this.props.setGroup(this.props.group.title);
	}

	render() {
		let {group, currentGroup} = this.props;
		let css = (currentGroup === group.title) ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action";
		return <li className={css} key={group.id} onClick={this.handlerClick}>{group.title}</li>;
	}
}

export default Group;