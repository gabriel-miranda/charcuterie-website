import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { colors } from 'theme';
import {
  StyledLink,
  StyledButton,
} from './styled';

const BUTTON = 'button';
const LINK = 'link';

const GREEN = colors.button.transparent.font.green;
const WHITE = colors.button.transparent.font.white;

const Button = ({
  children,
  type,
  href,
  as,
  ...rest
}) => {
  if (type === BUTTON) {
    return (
      <StyledButton {...rest}>
        { children }
      </StyledButton>
    );
  }
  return (
    <Link href={href} as={as}>
      <StyledLink {...rest}>
        { children }
      </StyledLink>
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([BUTTON, LINK]),
  solid: PropTypes.bool,
  theme: PropTypes.oneOf([GREEN, WHITE]),
};

Button.defaultProps = {
  type: 'link',
  solid: true,
  theme: GREEN,
};

export default Button;
