import { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { TextFieldContainer } from './styles';

export function BoxText() {
  const { restarted, handleSetTotalMin, totalMin } = useContext(TimerContext);
  return (
    <TextFieldContainer 
      type="text" 
      maxLength={8}
      name="textoCont" 
      id="textoCont" 
      value={totalMin}
      disabled={ !restarted }
      onChange={(e) => handleSetTotalMin(Number(e.target.value))}
    />
  );
}