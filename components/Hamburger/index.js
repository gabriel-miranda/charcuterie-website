import React from 'react';
import PropTypes from 'prop-types';
import Container from './styled';

const Hamburger = ({ active, onClick }) => (
  <Container onClick={onClick}>
    <button className={`hamburger ${active ? 'is-active' : ''}`} type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  </Container>
);

Hamburger.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Hamburger.defaultProps = {
  active: false,
};

export default Hamburger;
