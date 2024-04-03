import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store.js';
import NotePad from './components/NotePad.js';
import styled from 'styled-components';
import GlobalStyle from './style/GlobalStyle.js';
import Header from './components/Header.jsx';

const Container = styled.div`
  background-image: url('./img/tech-bg.PNG');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

const AppArea = styled.div`
  width: 43%;
  margin: 0 auto;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const H1 = styled.h1`
  display: inline-block;
  font-size: 2.8rem;
  text-align: center;
  text-transform: uppercase;
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Header />
        <AppArea>
          <H1>My Note App</H1>
          <NotePad />
        </AppArea>
      </Container>
    </Provider>
  );
};

export default App;
