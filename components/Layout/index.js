import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/Nav';

const Layout = ({ children, menu }) => (
  <Fragment>
    <Nav items={menu} />
    <main>
      { children }
    </main>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default Layout;
