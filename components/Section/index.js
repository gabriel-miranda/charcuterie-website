import React from 'react';
import PropTypes from 'prop-types';
import StyledSection, { StyledSectionBlock } from './styled';

export const SectionBlock = ({ children, center }) => (
  <StyledSectionBlock center={center}>
    { children }
  </StyledSectionBlock>
);

SectionBlock.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
};

SectionBlock.defaultProps = {
  center: false,
};


const Section = ({ children, small }) => (
  <StyledSection small={small}>
    { children }
  </StyledSection>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
};

Section.defaultProps = {
  small: false,
};

export default Section;
