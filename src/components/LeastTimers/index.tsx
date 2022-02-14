import { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { FiTrash } from 'react-icons/fi'
export function LeastTimers(){

    const { listMins, handleRemoveTimer, isPaused } = useContext(TimerContext);

    const validatePause = ( id: number ) => {

        return isPaused 
                ? 
                    <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTimer(id)}>
                        <FiTrash size={16}/>
                    </button>  
                :
                    '';
    }

    return (
        <div>
            <h3>Least Timers</h3>
            <ul>
                {listMins.map((time, index) => (
                    index !== 0 &&
                        <li key={index}>{time.minutes}:{time.seconds} 
                            {validatePause(time.id)}
                        </li>
                    
                ))}
            </ul>
        </div>
    );
}