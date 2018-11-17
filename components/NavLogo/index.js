import React from 'react';
import PropTypes from 'prop-types';
import Logo from './styled';

const NavLogo = ({ small }) => <Logo small={Number(small)} />;

NavLogo.propTypes = {
  small: PropTypes.bool,
};
NavLogo.defaultProps = {
  small: false,
};

export default NavLogo;
