import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Clear from './components/Clear';
import About from './components/About';


function App() {
	const name = 'Task Tracker';

	const [ showAddForm, setShowAddForm ] = useState(false);

	const [ tasks, setTasks ] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const data = await fetchTasks();
			console.log(data);
			setTasks(data);
		}
		getTasks();
	}, []);

	const fetchTasks = async () => {
		const res = await fetch(`http://localhost:3001/tasks`);
		const data = await res.json();
		return data;
	}

	// const fetchTask = async (id) => {
	// 	const res = await fetch(`http://localhost:3001/tasks/${id}`);
	// 	const data = await res.json();
	// 	return data;
	// }

	const addTask = async (task) => {
		//const id = Math.floor(Math.random() * 100) + 3;
		//const newTask = { id, ...task };
		const res = await fetch(`http://localhost:3001/tasks`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(task)
		});
		const data = await res.json();
		setTasks([ ...tasks, data ]);
	}

	const remindTask = async (id) => {
		const task = tasks.find(task => task.id === id);
		const newTask = { ...task, reminder: ! task.reminder };
		const res = await fetch(`http://localhost:3001/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(newTask)
		});
		const data = await res.json();
		setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task));
	}

	const deleteTask = async (id) => {
		await fetch(`http://localhost:3001/tasks/${id}`, { method: 'DELETE' });
		setTasks(tasks.filter((task) => task.id !== id));
	}

	const clearTasks = async () => {
		for (const task of tasks) await deleteTask(task.id);
		setTasks([]);
	}

	return (
		<Router>
			<div className="container">
				<Header title={name} show={! showAddForm} onAddClick={() => setShowAddForm(! showAddForm)}/>
				<Route path='/' exact render={() => (
					<>
					{showAddForm && <AddTask onAdd={addTask}/>}
					{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onRemind={remindTask}/> : 'No Tasks'}
					{tasks.length > 0 && <Clear showClear={tasks.length > 0} onClear={clearTasks}/>}
					</>
				)}/>
				<Route path='/about' component={About}/>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
