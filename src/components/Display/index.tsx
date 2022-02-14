import { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';

export function Display() {

    const { listMins } = useContext(TimerContext);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div>
      <h2>{ listMins[0]?.minutes ? formatTime(listMins[0].minutes) : '00' } : { listMins[0]?.seconds ? formatTime(listMins[0].seconds) : '00' }</h2>
    </div>
  );
}