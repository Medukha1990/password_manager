import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, userName, ...rest }) => {
	const isLogin = () => {
		return localStorage.getItem('isLogin');
	};

	return (
		<Route
			{...rest}
			render={(props) =>
				isLogin() ? <Component {...props} /> : <Redirect to='/login' />
			}
		/>
	);
};
export default PrivateRoute;
