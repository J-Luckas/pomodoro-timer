import { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';

export function BoxText() {
  const { restarted, handleSetTotalMin, totalMin } = useContext(TimerContext);
  return (
    <input 
      type="text" 
      name="textoCont" 
      id="textoCont" 
      value={totalMin}
      disabled={ !restarted }
      onChange={(e) => handleSetTotalMin(Number(e.target.value))}
    />
  );
}