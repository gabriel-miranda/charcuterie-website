import App, { Container } from 'next/app';
import React from 'react';
import Layout from 'components/Layout';
import LoadingBar from 'components/LoadingBar';
import Client from 'modules/client/main';

let _menu = null;

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
        <Layout menu={menu}>
          <LoadingBar />
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
