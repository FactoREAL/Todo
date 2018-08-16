import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GroupList from './components/GroupList';
import TaskList from './components/TaskList';

// import { createStore } from 'redux'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentGroup: '',
			groups: [
				{id: 0, title: 'Работа'},
				{id: 1, title: 'Личное'}
			],
			tasks: [
				{id: 0, group: 'Работа', title: 'Создавать видимость работы', done: false, edit: false},
				{id: 1, group: 'Личное', title: 'Разобраться с React', done: true, edit: false},
				{id: 2, group: 'Личное', title: 'Разобраться с Redux', done: false, edit: false}
			],
			nextGroupId: 2,
			nextTaskId: 3
		};
		this.handlerNewGroup = this.handlerNewGroup.bind(this);
		this.handlerGroupClick = this.handlerGroupClick.bind(this);
		this.handlerNewTask = this.handlerNewTask.bind(this);
		this.handlerTaskToggle = this.handlerTaskToggle.bind(this);
		this.handlerTaskDelete = this.handlerTaskDelete.bind(this);
		this.handlerTaskEdit = this.handlerTaskEdit.bind(this);
		this.handlerEditSave = this.handlerEditSave.bind(this);
		this.handlerEditCancel = this.handlerEditCancel.bind(this);
	}

	handlerNewTask(grp, txt) {
		this.setState({
			tasks: [...this.state.tasks, {id: this.state.nextTaskId, group: grp, title: txt, done: false, edit: false}],
			nextTaskId: this.state.nextTaskId + 1
		});
	}

	handlerNewGroup(txt) {
		this.setState({
			groups: [...this.state.groups, {id: this.state.nextGroupId, title: txt}],
			nextGroupId: this.state.nextGroupId + 1
		});
	}

	handlerGroupClick(id) {
		let [selected] = this.state.groups.filter(group => group.id === id);
		this.setState({currentGroup: selected.title});
	}

	handlerTaskToggle(id) {
		let newTasks = this.state.tasks.slice();
		newTasks.map(task => {
			if (task.id === id) task.done = !task.done;
			return true;
		});
		this.setState({tasks: newTasks});
	}

	handlerTaskEdit(id) {
		let newTasks = this.state.tasks.slice();
		newTasks.map(task => {
			if (task.id === id) task.edit = true;
			return true;
		});
		this.setState({tasks: newTasks});
	}

	handlerTaskDelete(id) {
		let newTasks = this.state.tasks.slice();
		this.setState({tasks: newTasks.filter(task => task.id !== id)});
	}

	handlerEditSave(id, txt) {
		let newTasks = this.state.tasks.slice();
		newTasks.map(task => {
			if (task.id === id) {
				task.edit = false;
				task.title = txt;
			}
			return true;
		});
		this.setState({tasks: newTasks});
	}

	handlerEditCancel(id) {
		let newTasks = this.state.tasks.slice();
		newTasks.map(task => {
			if (task.id === id) task.edit = false;
			return true;
		});
		this.setState({tasks: newTasks});
	}

	render() {
		let tasks = this.state.tasks.filter(task => task.group === this.state.currentGroup);
		return(
			<div className="container">
				<div className='row'>
					<GroupList groups={this.state.groups} currentGroup={this.state.currentGroup} handlerSubmit={this.handlerNewGroup} handlerGroupClick={this.handlerGroupClick}/>
					<TaskList tasks={tasks} currentGroup={this.state.currentGroup} handlerNewTask={this.handlerNewTask} handlerTaskToggle={this.handlerTaskToggle} handlerTaskDelete={this.handlerTaskDelete} handlerTaskEdit={this.handlerTaskEdit} handlerEditSave={this.handlerEditSave} handlerEditCancel={this.handlerEditCancel}/>	
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));