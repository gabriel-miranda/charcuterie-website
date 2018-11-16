import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

function handleClick(e, href) {
  const { target } = e.currentTarget;
  if (((target && target !== '_self')
    || e.metaKey
    || e.ctrlKey
    || e.shiftKey
    || (e.nativeEvent && e.nativeEvent.which === 2))
  ) {
    e.preventDefault();
    window.open(href);
  }
}

const ActiveLink = (props) => {
  const {
    router,
    children,
    href,
    ...rest
  } = props;
  return (
    <Link
      {...rest}
      href={href}
    >
      { React.cloneElement(children,
        {
          onClick: e => handleClick(e, href),
          active: router.pathname === href,
        })
      }
    </Link>
  );
};

ActiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  href: PropTypes.string.isRequired,
};

export default withRouter(ActiveLink);
