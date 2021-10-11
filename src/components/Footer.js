import { Link } from 'react-router-dom';


const Footer = () => {
	return (
		<footer>
			<hr/>
			<Link to="/">Home</Link> &bull;&nbsp;
			<Link to="/about">About</Link>
			<p className="copyright">&copy; Andrii Bardachenko, 2021</p>
		</footer>
	)
}

export default Footer;
