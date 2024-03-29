import App, { Container } from 'next/app';
import React from 'react';
import Layout from 'components/Layout';
import LoadingBar from 'components/LoadingBar';
import Head from 'components/Head';
import Client from 'modules/client/main';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { colors } from 'theme';

let _menu = null;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    font-family: Montserrat, Helvetica, sans-serif;
    color: #252525;
  }
  a {
    text-decoration: none;
  }
  main {
    overflow: hidden;
  }
  em {
    font-style: normal;
    color: ${colors.em};
  }
  strong {
    font-weight: 600;
  }
  ul {
    padding: 0;
    list-style: none;
  }
  img {
    max-width: 100%;
  }
  button:active,
  button:focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    text-transform: uppercase;
    font-size: 13px;
    color: ${colors.em};
  }
  ::-moz-placeholder {
    text-transform: uppercase;
    font-size: 13px;
    color: ${colors.em};
  }
  :-ms-input-placeholder {
    text-transform: uppercase;
    font-size: 13px;
    color: ${colors.em};
  }
  textarea {
    resize: vertical;
    min-height: 50px;
    height: 300px;
  }
`;

class MyApp extends App {
  static async getInitialProps(appContext) {
    const api = new Client(appContext.ctx.req);
    appContext.ctx.api = api;

    if (!_menu) {
      _menu = await api.menu.get();
    }

    let appProps = {};
    if (typeof App.getInitialProps === 'function') {
      appProps = await App.getInitialProps.call(App, appContext);
    }

    return {
      ...appProps,
      menu: _menu,
    };
  }

  render() {
    const {
      Component,
      pageProps,
      menu,
    } = this.props;

    _menu = menu;

    return (
      <Container>
        <Head />
        <Normalize />
        <GlobalStyle />
        <LoadingBar />
        <Layout menu={menu}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
