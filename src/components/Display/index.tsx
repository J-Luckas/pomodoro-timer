import { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';

export function Display() {

  const { currentMin } = useContext(TimerContext);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div>
      <h2>{ currentMin?.minutes ? formatTime(currentMin.minutes) : '00' } : { currentMin?.seconds ? formatTime(currentMin.seconds) : '00' }</h2>
    </div>
  );
}