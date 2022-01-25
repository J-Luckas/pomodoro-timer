import React from 'react';

import { Display } from './components/Display/index';
import { BoxText } from './components/BoxText/index';
import { ButPomo } from './components/ButPomo/index';
import { GlobalStyle } from './styles/global';

function App() {
  return (

    <div className="App">
      <GlobalStyle />
      <Display />
      <div>
        <BoxText />
        <ButPomo />
      </div>
    </div>
  );
}

export default App;
