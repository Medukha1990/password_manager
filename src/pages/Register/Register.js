import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
	const [state, setState] = useState({ name: '', password: '' });
	const history = useHistory();
	function setValue() {
		localStorage.setItem('isLogin', true);
		localStorage.setItem(state.name, state.password);
		history.push('/');
	}

	return (
		<div className='wrapper-log'>
			<label htmlFor='user'>Username: </label>
			<br />
			<input
				type='text'
				id='user'
				value={state.name}
				onChange={(event) =>
					setState({ ...state, name: event.target.value })
				}
			/>
			<br />
			<label htmlFor='password'>Password: </label>
			<br />

			<input
				type='password'
				id='password'
				value={state.password}
				onChange={(event) =>
					setState({ ...state, password: event.target.value })
				}
			/>

			<br />
			<button className='form-button' onClick={setValue}>
				Create my account
			</button>
		</div>
	);
};

export default Register;
