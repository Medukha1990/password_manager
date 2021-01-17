import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
	const [state, setState] = useState({ name: '', password: '' });
	const history = useHistory();
	const localValue = () => {
		const isUserExists = localStorage.getItem(state.name);
		if (isUserExists === state.password) {
			localStorage.setItem('isLogin', true);
			history.push('/');
		} else {
			alert(`user doesn't exist`);
		}
	};
	return (
		<div className='wrapper-log'>
			<label htmlFor='userName'>Username:</label>
			<br />
			<input
				type='text'
				id='userName'
				onChange={(event) =>
					setState({ ...state, name: event.target.value })
				}
			/>
			<br />
			<label htmlFor='password'>Password:</label>
			<br />
			<input
				type='password'
				id='password'
				onChange={(event) =>
					setState({ ...state, password: event.target.value })
				}
			/>
			<br />
			<button className='form-button' onClick={localValue}>
				Log in
			</button>
			<button className='form-button'>
				<Link to='/register'>Sign up</Link>
			</button>
		</div>
	);
};

export default Login;
