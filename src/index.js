import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GroupList from './components/GroupList';
import TaskList from './components/TaskList';
import allReducers from './reducers/index';
import { Provider } from 'react-redux'; 

import { createStore } from 'redux'

const store = createStore(allReducers);

store.subscribe(() => console.log(store.getState()));

class App extends Component {
	render() {
		return(
			<div className="container">
				<div className='row'>
					<GroupList />
					<TaskList />	
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Provider store={store}>
	<App />
</Provider>, document.getElementById('root'));
