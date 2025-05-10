import React from "react";
import { Provider } from "react-redux";
import store from "./components/store.js";
import NotePad from "./components/NotePad.js";
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle.js";
import Header from "./components/Header.jsx";

const Container = styled.div`
  postion: relative;
  background-image: url("./img/todoBg2.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

const AppArea = styled.div`
  max-width: 80rem;
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
  margin-bottom: 5rem;
  @media (max-width: 750px) {
    margin-bottom: 3rem;
    font-size: 2.4rem;
  }

  @media (max-width: 500px) {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Header />
        <AppArea>
          <H1>My To-Do App</H1>
          <NotePad />
        </AppArea>
      </Container>
    </Provider>
  );
};

export default App;
