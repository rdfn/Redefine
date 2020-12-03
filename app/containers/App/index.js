/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import logo from 'images/redefine_logo.png';
import boyLoader from 'images/loader.gif';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  justify-content: space-around;
  align-items: center;
  padding: 0 16px;
  flex-direction: column;
  .centerWrapper {
    display: flex;
    justify-content: center;
    position: relative;
    p {
      font-family: 'Indie Flower', cursive;
      padding: 0;
      font-size: 18px;
      margin: 0;
      position: absolute;
      bottom: -15px;
      color: #D3551F;
      ${'' /* font-weight: bold; */}
    }
    .loader {
      width: 40%;
    }
  }
  .logo {
    margin-top: 100px;
    width: 15%;
  }
`;

export default function App() {
  return (
    <AppWrapper>
      <div className="centerWrapper">
        <img className="loader" src={boyLoader} alt="loader" />
        <p>Loading...</p>
      </div>
      <img className="logo" src={logo} alt="logo" />
      {/* <Helmet
        titleTemplate="%s - Redefine"
        defaultTitle="Redefine"
        >
        <meta name="description" content="Redefine's Event Management Application" />
        </Helmet>
        <Header />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
        </Switch>
      <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
