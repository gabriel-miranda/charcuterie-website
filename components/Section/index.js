import React from 'react';
import PropTypes from 'prop-types';
import StyledSection, { StyledSectionBlock } from './styled';

export const SectionBlock = ({ children }) => (
  <StyledSectionBlock>
    { children }
  </StyledSectionBlock>
);

SectionBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

const Section = ({ children, small, center }) => (
  <StyledSection small={small} center={center}>
    { children }
  </StyledSection>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
  center: PropTypes.bool,
};

Section.defaultProps = {
  center: false,
  small: false,
};

export default Section;
