import React from 'react';
import PropTypes from 'prop-types';
import ActiveLink from 'components/ActiveLink';
import { ListItem, StyledLink } from './styled';

const NavItem = ({
  text,
  link,
  small,
  onClick,
}) => (
  <ListItem onClick={onClick}>
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
  onClick: PropTypes.func,
};

NavItem.defaultProps = {
  small: false,
  onClick: () => {},
};

export default NavItem;
