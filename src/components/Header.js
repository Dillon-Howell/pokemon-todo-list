import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import icon from './pokeball_icon.png';


const useStyles = makeStyles((theme) => ({
	root: {
		fontFamily: 'ZCOOL KuaiLe',
		fontSize: '40px',
		color: 'deeppink',
		textShadow: '1px 1px darkmagenta',
	},
}));

export const Header = ({ title }) => {
	const styles = useStyles();
	return (
		<nav className='navbar bg-primary'>
			<img className='icon' src={icon} alt='Pokeball' />
			<Typography className={styles.root}>{title}</Typography>

			<ul>
				<li>
					<Link to='/'  style={{ fontSize:'25px', color: 'purple', fontFamily:'ZCOOL KuaiLe'}}>
						Home
					</Link>
				</li>
				<li>
					<Link to='/about' style={{ fontSize:'25px', color: 'purple', fontFamily:'ZCOOL KuaiLe' }}>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
};

Header.defaultProps = {
	title: 'Pokemon ToDo List',
};
Header.propTypes = {
	title: PropTypes.string.isRequired,
};
