import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';


const Header = ({ title, show, onAddClick }) => {
	const location = useLocation();
	return (
		<header>
			<h1>{title}</h1>
			{location.pathname === '/' && <Button caption={show ? 'Add' : 'Close'} title={show ? 'Add Task' : 'Close'} color="white" bgcolor={show ? 'green' : 'lightgray'} onclick={onAddClick}/>}
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

Header.propTypes = {
	title: PropTypes.string,
	onAddClick: PropTypes.func,
}

export default Header;
