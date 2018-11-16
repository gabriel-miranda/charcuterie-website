import React from 'react';
import PropTypes from 'prop-types';
import ActiveLink from 'components/ActiveLink';
import { ListItem, StyledLink } from './styled';

const NavItem = ({ text, link }) => (
  <ListItem key={link}>
    <ActiveLink href={link}>
      <StyledLink href={link}>
        { text }
      </StyledLink>
    </ActiveLink>
  </ListItem>
);

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavItem;
