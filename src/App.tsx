import React from 'react';

import { Display } from './components/Display/index';
import { BoxText } from './components/BoxText/index';
import { ButPomo } from './components/ButPomo/index';
import { GlobalStyle } from './styles/global';
import { TimerProvider } from './contexts/TimerContext';
import { LeastTimers } from './components/LeastTimers/index';

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
        < LeastTimers />
      </div>
    </TimerProvider>
  );
}

export default App;
