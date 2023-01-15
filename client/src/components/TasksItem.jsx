import React from 'react';
import { useTasks } from '../context/Tasks.context';
import { useNavigate } from 'react-router-dom';
import { useAlert  } from 'react-alert'

import { FcCheckmark } from 'react-icons/fc';
import { MdDeleteOutline, MdOutlinePublishedWithChanges } from 'react-icons/md';

const TasksItem = ({task}) => {
    const navigate = useNavigate();
    const { deleteTasks, toggleTasksDone } = useTasks();
    const alert = useAlert();

    const borrar = () => {
        alert.success('Task deleted successfully');
        deleteTasks(task.id);
    }
    
    const handleDone = async () => {
        task.done ? alert.show("Tarea Pendiente!", { type: 'info', timeout: 2000}) : alert.show("Tarea realizada!", { type: 'success', timeout: 2000});
        await toggleTasksDone(task.id);
    }

    //! Para saber visualmente cual está realizada tachandola
    let change = 'none';
    task.done ? change = 'line-through' : change = 'none';

    return (
        <tr className='odd:bg-orange-100 even:bg-orange-50 text-orange-800' style={{textDecoration: `${change}`}}>
            <td className='p-2 text-center'>{task.id}</td>
            <td className='p-2 text-left text-gray-700'>{task.title}, {task.description} <br/> {task.CREATEAt.slice(0,-14)} </td>
            <td className='py-2 text-left flex gap-2'>
                <button onClick={() => navigate(`/edit/${task.id}`)}>
                    <FcCheckmark/>
                </button>
                <button onClick={borrar}>
                    <MdDeleteOutline/>
                </button>
                <button onClick={() => handleDone(task.done)}>
                    <MdOutlinePublishedWithChanges/>
                </button>
            </td>
        </tr>
    );
}

export default TasksItem;