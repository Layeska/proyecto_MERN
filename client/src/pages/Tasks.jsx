import React from 'react';
import { useEffect } from 'react';
import TasksItem from '../components/TasksItem';
import { useTasks } from '../context/Tasks.context';

const Tasks = () => {
    const {tasks, loadTasks} = useTasks();

    useEffect(() => {
        loadTasks();
    }, []);

    function renderMain() {
        if(tasks.length == 0){
            return <h1 className=' font-bold'>No hay notas aun!</h1>
        }
        return tasks.map((task) => <TasksItem task={task} key={task.id}/>);
    }

    return (
        <div>
            <h1 className='pb-5 text-5xl font-bold text-center'>Lista de tareas</h1>
            <div className='flex flex-col gap-3 justify-center items-center'>
                {renderMain()}
            </div>
        </div>
    )
}

export default Tasks

/*
 <div>
            <h1 className='text-5xl text-white font-bold text-center'>Tasks</h1>
            <div className='grid grid-cols-3 gap-2'>
                {renderMain()}
            </div>
        </div>
*/