import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import './index.less';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<PrivateRoute component={Main} path='/' exact />
			</Switch>
		</Router>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
