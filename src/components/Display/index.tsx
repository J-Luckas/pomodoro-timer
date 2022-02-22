import { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { ContainerDisplay, TextDisplay } from './styles';

export function Display() {

    const { listMins } = useContext(TimerContext);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <ContainerDisplay>
      <TextDisplay
        color={listMins[0]?.minutes >= 15 ? '#33CC95' : listMins[0]?.minutes > 5 ? '#eba417' : '#E52E4D'}
      >
        { listMins[0]?.minutes ? formatTime(listMins[0].minutes) : '00' } : { listMins[0]?.seconds ? formatTime(listMins[0].seconds) : '00' }
      </TextDisplay>
    </ContainerDisplay>
  );
}