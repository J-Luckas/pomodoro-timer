import { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';

export function BoxText() {
  const { handleSetTotalMin } = useContext(TimerContext);
  return (
    <input 
      type="text" 
      name="textoCont" 
      id="textoCont" 
      onChange={(e) => handleSetTotalMin(Number(e.target.value))}
    />
  );
}