import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

const Layout = ({ children, menu }) => (
  <Fragment>
    <Nav items={menu} />
    <main>
      { children }
    </main>
    <Footer />
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
