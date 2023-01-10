import {Form, Formik} from 'formik';
import {useTasks} from "../context/Tasks.context";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAlert } from 'react-alert'

const TasksForm = () => {
    const { createTasks, getTask, updateTasks } = useTasks();
    const [tasks, setTasks] = useState({
        title: '',
        description: ''
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadTasks = async () => {
            if(params.id) {
                const task = await getTask(params.id);
                setTasks({
                    title: task.title,
                    description: task.description
                });
            }
        };

        loadTasks();
    }, []);
    const alert = useAlert()
    

    return (
        <div className=''>
            <Formik initialValues={tasks}
                enableReinitialize={true}
                onSubmit= {async (values, actions) => {

                    if(values.title !== '' || values.description !== '') {
                        if(params.id) {
                            await updateTasks(params.id, values);
                            navigate('/');
                        } else {
                            await createTasks(values);
                            navigate('/');
                        }
                        setTasks({title: '', description: ''});
                    } else {
                        alert.show('Por favor ingresar tarea!')
                    }
            }}>
                {({handleChange, handleSubmit, values, isSubmitting}) => (
                    <Form onSubmit={handleSubmit} className='bg-amber-500 max-w-lg max-h-full rounded-md p-4 mx-auto mt-10'>
                        <h2 className='text-xl font-bold uppercase text-center'>{params.id ? 'Editar' : 'Crear'} Tareas</h2>
                        <label className='block'>Tarea</label>
                        <input type='text' name='title' placeholder='Ingresa tarea' onChange={handleChange} value={values.title} className='px-2 py-1 rounded-sm w-full placeholder-gray-700'/>

                        <label className='block mt-2'>Descripción</label>
                        <textarea name='description' rows='3' placeholder='Escribe detalles...' onChange={handleChange} value={values.description} className='px-2 py-1 rounded-sm w-full placeholder-gray-700'></textarea>
                        <button type='submit' disabled={isSubmitting} className='block bg-amber-800 px-2 py-1 text-white w-full rounded-md'> {isSubmitting ? 'Guardando...' : 'Guardar'} </button>
                    </Form>
                )}
            </Formik>
            
        </div>
    )
}

export default TasksForm