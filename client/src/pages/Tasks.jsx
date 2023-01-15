import React, { useEffect }from 'react';
import TasksItem from '../components/TasksItem';
import { useTasks } from '../context/Tasks.context';

const Tasks = () => {
    const {tasks, loadTasks} = useTasks();
    let fecha = new Date().toDateString();

    useEffect(() => {
        loadTasks();
    }, []);

    function renderMain() {
        if(tasks.length == 0){
            return (
                <tr className='odd:bg-orange-100 even:bg-orange-50 text-orange-800'>
                    <td className='p-2 text-center'></td>
                    <td className='p-2 text-left text-gray-700'>No hay tareas!</td>
                    <td></td>
                </tr>
            );
        }

        return tasks.map((task) => <TasksItem task={task} key={task.id}/> );
    }


    return (
        <div className='bg-white mt-5 p-4 rounded-lg shadow-lg'>
            <div>
                <h2 className='text-lg font-bold mb-0 leading-none text-gray-800'>Todo's</h2>
                <small className='text-xs italic inline-block mt-0 text-gray-700'>{`${fecha}`}</small>
            </div>
            <div className='mt-3 overflow-y-auto max-h-80'>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-orange-500 text-orange-50'>
                            <th className='text-center p-2 rounded-tl-lg'>#</th>
                            <th className='text-left p-2 w-full'>Details</th>
                            <th className='text-left p-2 rounded-tr-lg'>Actions</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {renderMain()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tasks;