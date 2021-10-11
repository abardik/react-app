const Button = ({ caption, title, color, bgcolor, onclick }) => {
	return (
		<button className="btn" title={title} style={{color: color, backgroundColor: bgcolor}} onClick={onclick}>{caption}</button>
	)
}

export default Button;
