import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { ListItem, StyledLink } from './styled';

const NavItem = ({ text, link }) => (
  <ListItem key={link}>
    <Link href={link}>
      <StyledLink href={link}>
        { text }
      </StyledLink>
    </Link>
  </ListItem>
);

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavItem;
