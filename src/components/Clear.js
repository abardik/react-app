import PropTypes from 'prop-types';
import Button from './Button';

const Clear = ({ onClear }) => {
	return (
		<div style={{ marginTop: '30px' }}>
			<Button caption="Clear" title="Clear Tasks" color="white" bgcolor="red" onclick={onClear}/>
		</div>
	)
}

Clear.propTypes = {
	showClear: PropTypes.bool,
	onClear: PropTypes.func
}

export default Clear;
