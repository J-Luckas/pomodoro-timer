import { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { FiTrash } from 'react-icons/fi'
export function LeastTimers(){

    const { listMins, handleRemoveTimer } = useContext(TimerContext);

    return (
        <div>
            <h3>LeastTimers</h3>
            <ul>
                {listMins.map((time, index) => (

                    <li key={index}>{time.minutes}:{time.seconds} 
                    <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTimer(time.id)}>
                    <FiTrash size={16}/>
                  </button>  </li>
                ))}
            </ul>
        </div>
    );
}