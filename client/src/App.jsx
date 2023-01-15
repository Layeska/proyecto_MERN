import { Route, Routes } from 'react-router-dom';
import {TasksContextProvider} from './context/Tasks.context';
import Tasks from './pages/Tasks';
import TasksForm from './pages/TasksForm';
import NotFound from './pages/NotFount';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <main className='bg-orange-300 flex justify-center items-start h-screen font-mono'>
        <div className='w-full max-w-3xl mx-3 mt-10'>
          <>
            <h1 className='text-center mb-5 text-5xl uppercase font-bold italic'>Todo List</h1>
              <TasksContextProvider>
                  <Routes>
                    <Route path='/' element={<Tasks/>}/>
                    <Route path='/new' element={<TasksForm/>}/>
                    <Route path='/edit/:id' element={<TasksForm/>}/>
                    <Route path='*' element={<NotFound/>}/>
                  </Routes>
              </TasksContextProvider>
          </>
      </div>
    </main>
  </>
  );
}

export default App;