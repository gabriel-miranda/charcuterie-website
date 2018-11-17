import React from 'react';
import PropTypes from 'prop-types';
import ActiveLink from 'components/ActiveLink';
import { ListItem, StyledLink } from './styled';

const NavItem = ({ text, link, small }) => (
  <ListItem>
    <ActiveLink href={link}>
      <StyledLink href={link} small={small}>
        { text }
      </StyledLink>
    </ActiveLink>
  </ListItem>
);

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

NavItem.defaultProps = {
  small: false,
};

export default NavItem;
