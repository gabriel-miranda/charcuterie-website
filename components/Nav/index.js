import React from 'react';
import PropTypes from 'prop-types';
import NavItem from 'components/NavItem';
import NavLogo from 'components/NavLogo';
import { NavList, List, SubHeader } from './styled';

const Nav = ({ items }) => {
  const [item1, item2, item3, item4] = items;
  return (
    <NavList>
      <SubHeader />
      <List>
        {[item1, item2].map(NavItem)}
        <NavLogo />
        {[item3, item4].map(NavItem)}
      </List>
    </NavList>
  );
};

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default Nav;
