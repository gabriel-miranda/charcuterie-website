import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NavItem from 'components/NavItem';
import Hamburger from 'components/Hamburger';
import MobileNavContainer from './styled';

const renderNavItem = handleMenuClick => item => (
  <NavItem {...item} mobile onClick={handleMenuClick} />
);

const MobileNav = ({
  open,
  items,
  handleMenuClick,
  small,
}) => (
  <Fragment>
    <Hamburger
      active={open}
      onClick={handleMenuClick}
    />
    <MobileNavContainer open={open} small={small}>
      {items.map(renderNavItem(handleMenuClick))}
    </MobileNavContainer>
  </Fragment>
);

MobileNav.propTypes = {
  open: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  small: PropTypes.bool,
};

MobileNav.defaultProps = {
  open: false,
  small: false,
};

export default MobileNav;
