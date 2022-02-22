import { GlobalStyle } from './styles/global';
import { TimerProvider } from './contexts/TimerContext';
import { Dashboard } from './components/Dashboard';

function App() {  


  return (
    <TimerProvider >
      <Dashboard />
      <GlobalStyle />
    </TimerProvider>
  );
}

export default App;
