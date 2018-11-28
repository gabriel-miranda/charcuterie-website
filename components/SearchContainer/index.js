import React from 'react';
import PropTypes from 'prop-types';
import StyledSearchContainer from './styled';

const SearchContainer = ({ children }) => (
  <StyledSearchContainer>
    { children }
  </StyledSearchContainer>
);

SearchContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchContainer;
