import React from 'react';
import { useTasks } from '../context/Tasks.context';
import { useNavigate } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { AiFillCloseSquare } from "react-icons/ai";

const TasksItem = ({task}) => {
    const navigate = useNavigate();
    const { deleteTasks, toggleTasksDone } = useTasks();
    let bg = '';

    const handleDone = async () => await toggleTasksDone(task.id);

    task.done ? bg = '#71717A' : bg= '#FBBF24';

    /* if(task.done == 1) {
        bg = '#71717A';
        //bg = 'bg-amber-400';
    } else {
        bg= '#FBBF24';
        //bg = 'bg-zinc-500';
    }*/

    return (
        <div className='rounded-md p-4 shadow-lg xl:w-5/6' style={{background: `${bg}`}}>
            <header className='flex justify-between'>
                <h2 className='text-sm font-bold'>{task.title}</h2>
                <span className=''>{task.done == 1 ? '✅'  : '❌'}</span>
            </header>
            <p className='text-xs'>{task.description}</p>
            <span className='text-s'>{task.CREATEAt.slice(0,-14)}</span>
            <div className='flex gap-x-1'>
                <button className= 'hover:bg-slate-300 rounded-md px-2 py-1 text-black' onClick={() => deleteTasks(task.id)}><MdOutlineDelete/></button>
                <button className='hover:bg-slate-300 rounded-md px-2 py-1 text-black' onClick={() => navigate(`/edit/${task.id}`)}><BiEdit/></button>
                <button className='px-2 py-1 text-gray-600 hover:text-white' onClick={() => handleDone(task.done)}>Tarea {task.done == 1 ? 'Completada' : 'No Completa'}</button>
            </div>
        </div>
    );
}


export default TasksItem