import React, { useContext, useState } from 'react';
import Context from '../context';

const TableItem = ({ rowData }) => {
	const { removeRow, editRow, setIsEditMode } = useContext(Context);
	const [isShown, setToggle] = useState(false);
	const mask = '********';

	return (
		<tr className='tbodyRow'>
			<td>{rowData.id}</td>
			<td>{rowData.websiteName}</td>
			<td>{rowData.userName}</td>
			<td>
				{isShown ? rowData.password : mask}
				<button
					onClick={() => {
						setToggle(!isShown);
					}}
					className='icon'
				>
					{isShown ? 'hide' : 'show'}
				</button>
			</td>

			<td>
				<button
					className='action-button'
					onClick={() => removeRow(rowData.id)}
				>
					Delete
				</button>
				<button
					className='form-button'
					onClick={() => {
						editRow(rowData.id);
						setIsEditMode(true);
					}}
				>
					Edit
				</button>
			</td>
		</tr>
	);
};

export default TableItem;
