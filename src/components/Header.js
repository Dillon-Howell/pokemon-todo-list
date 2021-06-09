import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import icon from './pokeball_icon.png';
import { Fragment } from 'react';

export const Header = ({ title }) => {
	return (
		<Fragment>
			<nav className='navbar bg-primary'>
				<img className='icon' src={icon} alt='Pokeball' />
				<h1 className='navbar-title'>{title}</h1>

				<ul>
					<li>
						<Link
							to='/'
							style={{
								fontSize: '25px',
								color: 'purple',
								fontFamily: 'ZCOOL KuaiLe',
							}}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							style={{
								fontSize: '25px',
								color: 'purple',
								fontFamily: 'ZCOOL KuaiLe',
							}}
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

Header.defaultProps = {
	title: 'Pokemon ToDo List',
};
Header.propTypes = {
	title: PropTypes.string.isRequired,
};
