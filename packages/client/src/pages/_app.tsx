import App, { AppContext } from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import Head from 'next/head';
import { setup } from '../utils/setup';
import defaultTheme from '../themes/default.theme';

class MyApp extends App<AppContext> {
  public render() {
    const { Component, pageProps } = this.props;
    setup();

    return (
      <>
        <Head>
          <script src="https://js.stripe.com/v3/" />
        </Head>
        <style jsx global>{`
          body {
            margin: 0px;
          }
        `}</style>
        <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
