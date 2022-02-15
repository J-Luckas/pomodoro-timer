import { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';

export function BoxText() {
  const { handleSetTotalMin, totalMin } = useContext(TimerContext);
  return (
    <input 
      type="text" 
      name="textoCont" 
      id="textoCont" 
      value={totalMin}
      onChange={(e) => handleSetTotalMin(Number(e.target.value))}
    />
  );
}