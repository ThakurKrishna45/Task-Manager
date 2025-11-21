import './App.css'
import Login from './pages/Login'
import Registration from './pages/registration'
import Dashboard from './pages/dashboard'
import Task from './pages/task'
import CreateTask from './pages/createTask'
import Projects from './pages/projects'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <>
     <Router>
       <Routes>
         <Route path='/' element={<Projects/>}/>
         <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/login' element={<Login />} />
         <Route path='/registration' element={<Registration />} />
         <Route path='/tasks' element={<Task />} />
         <Route path='/createTask' element={<CreateTask/>}/>
       </Routes>
     </Router>
    </>
  )
}

export default App

