import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import NavItem from 'components/NavItem';
import NavLogo from 'components/NavLogo';
import MobileNav from 'components/MobileNav';
import DeskphoneIcon from 'mdi-react/DeskphoneIcon';
import FacebookIcon from 'mdi-react/FacebookBoxIcon';
import {
  NavList,
  List,
  ListMobile,
  SubHeader,
  SubHeaderInner,
  SubHeaderLeft,
  SubHeaderText,
  WaypointContainer,
} from './styled';

class NavContainer extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string,
        text: PropTypes.string,
      })
    ).isRequired,
  };

  state = {
    small: false,
    open: false,
  };

  onEnter = () => {
    this.setState({ small: false });
  }

  onLeave = () => {
    this.setState({ small: true });
  }

  handleMenuClick = () => {
    this.setState(({ open }) => ({ open: !open }));
  }

  render() {
    const { small, open } = this.state;
    const { items } = this.props;
    return (
      <Fragment>
        <WaypointContainer>
          <Waypoint
            onEnter={this.onEnter}
            onLeave={this.onLeave}
          />
        </WaypointContainer>
        <Nav
          items={items}
          small={small}
          handleMenuClick={this.handleMenuClick}
          open={open}
        />
      </Fragment>
    );
  }
}

const renderNavItem = small => item => (
  <NavItem {...item} small={small} key={item.link} />
);

const Nav = ({
  small,
  items,
  handleMenuClick,
  open,
}) => {
  const [item1, item2, item3, item4] = items;
  return (
    <Fragment>
      <SubHeader>
        <SubHeaderInner>
          <SubHeaderLeft>
            <DeskphoneIcon
              color="white"
              size={25}
            />
            <SubHeaderText>
              TEL. 03496 42-9429
            </SubHeaderText>
          </SubHeaderLeft>
          <a
            href="https://www.facebook.com/Las4Bfiambresyembutidos/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SubHeaderText>
              FACEBOOK
            </SubHeaderText>
            <FacebookIcon
              color="white"
              size={25}
            />
          </a>
        </SubHeaderInner>
      </SubHeader>
      <NavList small={small}>
        <List>
          {[item1, item2].map(renderNavItem(small))}
          <NavLogo small={small} />
          {[item3, item4].map(renderNavItem(small))}
        </List>
        <ListMobile>
          <NavLogo small={small} />
          <MobileNav
            open={open}
            small={small}
            items={items}
            handleMenuClick={handleMenuClick}
          />
        </ListMobile>
      </NavList>
    </Fragment>
  );
};

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
  small: PropTypes.bool,
  handleMenuClick: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

Nav.defaultProps = {
  small: false,
  open: false,
};

export default NavContainer;
