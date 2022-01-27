import React, { useState } from 'react';

import { Display } from './components/Display/index';
import { BoxText } from './components/BoxText/index';
import { ButPomo } from './components/ButPomo/index';
import { GlobalStyle } from './styles/global';
import { TimerProvider } from './contexts/TimerContext';

function App() {  


  return (
    <TimerProvider >
      <div className="App">
        <GlobalStyle />
        <Display />
        <div>
          <BoxText />
          <ButPomo />
        </div>
      </div>
    </TimerProvider>
  );
}

export default App;
