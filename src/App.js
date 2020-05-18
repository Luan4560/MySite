import React from 'react';
import Header from './pages/Header';
import Main from './pages/Main';
import Slider from './pages/Slider';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header/>
      <Main />
      <Slider/>
      <GlobalStyle/>
    </>
  );
}

export default App;
