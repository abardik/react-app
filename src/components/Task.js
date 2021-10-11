import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onRemind }) => {
	return (
		<div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onRemind(task.id)}>
			<div>{task.text}</div>
			<FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/>
		</div>
	)
}

export default Task;
