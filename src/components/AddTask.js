import { useState } from 'react';
import Button from './Button';
import { FaClock } from 'react-icons/fa';

const AddTask = ({ onAdd }) => {
	const [ text, setText ] = useState('');
	const [ reminder, setReminder ] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();
		if ( ! text ) return;
		setText('');
		setReminder(false);
		onAdd({ text, reminder });
	}
	return (
		<form className="add-form" onSubmit={onSubmit}>
			<label>Task</label>
			<input type="text" placeholder="Task text" value={text} onChange={(e) => setText(e.target.value)} />
			<FaClock title="Reminder" style={{cursor: 'pointer', color: reminder ? 'orange' : 'lightgray'}} onClick={(e) => setReminder(! reminder)}/>
			<Button caption="Add" title="Add Task" color="white" bgcolor="green"/>
		</form>
	)
}

export default AddTask;
