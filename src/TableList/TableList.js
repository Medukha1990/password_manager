import React from 'react';
import TableItem from '../TableItem/TableItem';

const TableList = ({ data }) => {
	return (
		<table>
			<thead>
				<tr className='theadRow'>
					<th>ID</th>
					<th>Website</th>
					<th>User</th>
					<th>Password</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => {
					return <TableItem rowData={item} key={item.id} />;
				})}
			</tbody>
		</table>
	);
};

export default TableList;
