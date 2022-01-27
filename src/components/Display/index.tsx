import { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';

export function Display() {

  const { listMins } = useContext(TimerContext);

  return (
    <div>
      <h2>{ listMins[0]?.minutes ? listMins[0].minutes : 0 } : { listMins[0]?.seconds ? listMins[0].seconds : 0 }</h2>
    </div>
  );
}