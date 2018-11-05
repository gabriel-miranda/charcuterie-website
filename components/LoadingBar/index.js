import React from 'react';
import Router from 'next/router';
import StyledLoadingBar from './styled';

const TIME_OUT = 500;
const delay = fn => setTimeout(fn, TIME_OUT);

export default class LoadingBar extends React.Component {
  state = {
    progress: 0,
    done: false,
  };

  componentDidMount() {
    this.mounted = true;
    Router.router.events.on('routeChangeStart', this.startAutoIncrement);
    Router.router.events.on('routeChangeComplete', this.done);
    Router.router.events.on('routeChangeError', this.done);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  setStateMounted(state, cb = () => {}) {
    if (this.mounted) {
      this.setState(state, cb);
    }
  }

  reset = () => {
    delay(() => this.setStateMounted({ progress: 0 }, () => {
      delay(() => this.setStateMounted({ done: false }));
    }));
  }

  hide = () => {
    delay(() => this.setStateMounted({ done: true }, this.reset));
  }

  startAutoIncrement = () => {
    this.increment = setInterval(() => {
      const { progress } = this.state;
      if (progress < 100) {
        const value = progress + Math.ceil(Math.random() * 10);
        this.setStateMounted({ progress: value >= 100 ? 100 : value });
      } else {
        clearInterval(this.increment);
      }
    }, Math.ceil(Math.random() * 1000));
  }

  done = () => {
    this.setState({ progress: 100 }, this.hide);
  }

  render() {
    const { progress, done } = this.state;
    return (
      <StyledLoadingBar
        style={{ width: `${progress}%`, opacity: `${done ? 0 : 1}` }}
      />
    );
  }
}
