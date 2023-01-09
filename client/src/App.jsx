import { Route, Routes } from 'react-router-dom';
import Tasks from './pages/Tasks';
import TasksForm from './pages/TasksForm';
import NotFound from './pages/NotFount';
import NavBar from './components/NavBar';
import {TasksContextProvider} from './context/Tasks.context';

function App() {
  return (
    <div className=''>
      <NavBar/>
      <div className='container mx-auto py-4 px-20'>
        <TasksContextProvider>
          <Routes>
            <Route path='/' element={<Tasks/>}/>
            <Route path='/new' element={<TasksForm/>}/>
            <Route path='/edit/:id' element={<TasksForm/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </TasksContextProvider>
      </div>
    </div>
  )
}

export default App
