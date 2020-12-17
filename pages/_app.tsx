import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/GlobalStyle';
import { Header } from '../src/layouts/header/Header';
import { Footer } from '../src/layouts/footer/Footer';
import Head from 'next/head';
import { PageWrapper, HeaderBodyWrapper } from '../src/layouts/Layout.styled';
import { Banner } from '../src/components/banner';

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <>
        <Head>
          <title>ThunderHub - Lightning Node Manager</title>
        </Head>
        <ThemeProvider theme={{ mode: 'light' }}>
          <GlobalStyles />
          <Banner />
          <PageWrapper>
            <HeaderBodyWrapper>
              <Header />
              <Component {...pageProps} />
            </HeaderBodyWrapper>
            <Footer />
          </PageWrapper>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
