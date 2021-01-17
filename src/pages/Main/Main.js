import React, { useState, useEffect } from 'react';
import Context from '../../context';
import TableList from '../../TableList/TableList';

const Main = () => {
	const [arr, setArr] = useState([]);
	const [selectedRow, setSelectedRow] = useState({
		websiteName: '',
		userName: '',
		password: '',
	});
	const [isEditMode, setIsEditMode] = useState(false);

	useEffect(() => {
		const tableData = JSON.parse(localStorage.getItem('tableData'));
		tableData && setArr(tableData);
	}, []);

	useEffect(() => {
		localStorage.setItem('tableData', JSON.stringify(arr));
	}, [arr]);

	function addNewRowInTable() {
		const newObject = {
			id: arr.length + 1,
			websiteName: selectedRow.websiteName,
			userName: selectedRow.userName,
			password: selectedRow.password,
		};
		const newArr = [...arr, newObject];
		setArr(newArr);
	}
	function removeRow(id) {
		const newArr = arr.filter((item) => item.id !== id);
		setArr(newArr);
	}
	function editRow(id) {
		const foundRow = arr.find((element) => element.id == id);
		setSelectedRow(foundRow);
	}
	function saveRowToTable() {
		const updatedArr = arr.map((item) => {
			if (item.id === selectedRow.id) {
				return selectedRow;
			}
			return item;
		});
		setArr(updatedArr);
	}

	return (
		<Context.Provider value={{ removeRow, editRow, setIsEditMode }}>
			<div className='wrapper'>
				<h1 className='title'>Pasword manager</h1>
				<TableList data={arr} />
				<label htmlFor='websiteName'>Website:</label>
				<br />
				<input
					type='text'
					id='websiteName'
					value={selectedRow.websiteName}
					onChange={(event) =>
						setSelectedRow({
							...selectedRow,
							websiteName: event.target.value,
						})
					}
				/>
				<br />
				<label htmlFor='userName'>User:</label>
				<br />
				<input
					type='text'
					id='userName'
					value={selectedRow.userName}
					onChange={(event) =>
						setSelectedRow({
							...selectedRow,
							userName: event.target.value,
						})
					}
				/>
				<br />
				<label htmlFor='password'>Password:</label>
				<br />
				<input
					type='password'
					id='password'
					value={selectedRow.password}
					onChange={(event) => {
						setSelectedRow({
							...selectedRow,
							password: event.target.value,
						});
					}}
				/>
				<br />
				{isEditMode ? (
					<>
						{' '}
						<button
							className='form-button'
							onClick={saveRowToTable}
						>
							Save
						</button>
						<button
							className='form-button'
							onClick={() => setIsEditMode(false)}
						>
							Cancel
						</button>
					</>
				) : (
					<button className='form-button' onClick={addNewRowInTable}>
						Add
					</button>
				)}
			</div>
		</Context.Provider>
	);
};

export default Main;
